<template>
	<header class="header">
		<div class="header__logo">
			<img src="../../assets/logo.png" alt="" /> <span>INVENTORY</span>
		</div>
		<input
			placeholder="Поиск"
			class="header__search"
			type="text"
			name="search"
			id="search"
		/>
		<HeaderRight class="header__right-block" />
	</header>
</template>

<script>
import HeaderRight from '@/components/HeaderRight/HeaderRight.vue';
export default {
	components: { HeaderRight },
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped src="./header.scss" />
