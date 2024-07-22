<template>
	<div class="users-view">
		<Header />
		<div class="users-view__wrapper">
			<LeftMenu />
			<div class="page-wrapper">
				<h1>This is an UsersView page</h1>
			</div>
		</div>
	</div>
</template>

<script>
import LeftMenu from '../../components/LeftMenu/LeftMenu.vue';
import Header from '../../components/Header/Header.vue';
export default {
	name: 'UsersView',
	components: { LeftMenu, Header },
	setup() {
		return {};
	},
};
</script>

<style lang="scss" src="./users-view.scss" scoped />
