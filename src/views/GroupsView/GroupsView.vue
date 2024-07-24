<template>
	<div class="page-wrapper">
		<GroupsTitle />
		<GroupList />
	</div>
</template>

<script lang="ts">
import GroupsTitle from '../../components/GroupsView/GroupsTitle/GroupsTitle.vue';
import GroupList from '../../components/GroupsView/GroupList/GroupList.vue';
export default {
	name: 'GroupsView',
	components: { GroupsTitle, GroupList },
	setup() {
		return {};
	},
};
</script>

<style lang="scss" src="./groups-view.scss" scoped />
