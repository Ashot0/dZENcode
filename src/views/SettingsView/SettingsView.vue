<template>
	<div class="settings-view">
		<Header />
		<div class="settings-view__wrapper">
			<LeftMenu />
			<div class="page-wrapper">
				<h1>This is an SettingsView page</h1>
			</div>
		</div>
	</div>
</template>

<script>
import LeftMenu from '../../components/LeftMenu/LeftMenu.vue';
import Header from '../../components/Header/Header.vue';
export default {
	name: 'SettingsView',
	components: { LeftMenu, Header },
	setup() {
		return {};
	},
};
</script>

<style lang="scss" src="./settings-view.scss" scoped />
