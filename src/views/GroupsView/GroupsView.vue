<template>
	<div class="groups-view">
		<Header />
		<div class="groups-view__wrapper">
			<LeftMenu />
			<div class="page-wrapper">
				<GroupsTitle />
				<GroupList />
			</div>
		</div>
	</div>
</template>

<script>
import LeftMenu from '../../components/LeftMenu/LeftMenu.vue';
import Header from '../../components/Header/Header.vue';
import GroupsTitle from '../../components/GroupsView/GroupsTitle/GroupsTitle.vue';
import GroupList from '../../components/GroupsView/GroupList/GroupList.vue';
export default {
	name: 'GroupsView',
	components: { LeftMenu, Header, GroupsTitle, GroupList },
	setup() {
		return {};
	},
};
</script>

<style lang="scss" src="./groups-view.scss" scoped />
