<template>
	<div class="group-list__wrapper">
		<div class="group-list">
			<Group
				v-for="(group, index) in allOrders"
				:key="index"
				:group="group"
				@click="selectGroup(group, index)"
				:class="{ 'selected-group': selectedIndex === index }"
			/>
		</div>
		<GroupProductList
			:selectedGroup="selectedGroup"
			@close="clearSelectedGroup"
		/>
	</div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import Group from '@/components/GroupsView/Group/Group.vue';
import GroupProductList from '@/components/GroupsView/GroupProductList/GroupProductList.vue';
import { Store } from 'vuex';
import { RootState } from '@/store/index';

export default {
	components: {
		Group,
		GroupProductList,
	},
	setup() {
		const store = useStore<Store<RootState>>();

		const allOrders = computed(() => store.getters['Orders/allOrders']);

		const selectedGroup = ref<any>(null);
		const selectedIndex = ref<number | null>(null);

		const selectGroup = (group: any, index: number) => {
			selectedGroup.value = group;
			selectedIndex.value = index;
		};

		const clearSelectedGroup = () => {
			selectedGroup.value = null;
			selectedIndex.value = null;
		};

		return {
			allOrders,
			selectedGroup,
			selectedIndex,
			selectGroup,
			clearSelectedGroup,
		};
	},
};
</script>

<style lang="scss" src="./group-list.scss" />
