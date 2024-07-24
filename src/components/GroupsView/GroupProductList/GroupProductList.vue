<template>
	<div class="group-product-list" v-if="selectedGroup">
		<button
			class="group-product-list__close"
			@click="$emit('close')"
			type="button"
		>
			<img src="../../../assets/icons/close.png" alt="" />
		</button>
		<h2 class="group-product-list__title">{{ selectedGroup.title }}</h2>
		<button class="group-product-list__add-btn" type="button">
			<div class="group-product-list__add-btn-icon">+</div>
			Добавить продукт
		</button>
		<GroupProduct
			v-for="(product, index) in products"
			:key="index"
			:product="product"
		/>
	</div>
	<div v-else></div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import GroupProduct from '@/components/GroupsView/GroupProduct/GroupProduct.vue';

interface SelectedGroup {
	products?: number[];
}

export default defineComponent({
	props: {
		selectedGroup: {
			type: Object as () => SelectedGroup,
			required: false,
			default: () => ({}),
		},
	},
	components: {
		GroupProduct,
	},
	setup(props) {
		const store = useStore();

		const products = computed(() => {
			if (!props.selectedGroup || !props.selectedGroup.products) {
				return [];
			}
			return props.selectedGroup.products.map((id) =>
				store.getters['Products/getProductById'](id)
			);
		});

		return {
			products,
		};
	},
});
</script>

<style lang="scss" src="./group-product-list.scss" scoped />
