<template>
	<div class="order-view">
		<Header />
		<div class="order-view__wrapper">
			<LeftMenu />
			<div class="page-wrapper">
				<OrderTitle />
				<OrderList />
			</div>
		</div>
	</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu/LeftMenu.vue';
import Header from '@/components/Header/Header.vue';
import OrderTitle from '@/components/OrderView/OrderTitle/OrderTitle.vue';
import OrderList from '@/components/OrderView/OrderList/OrderList.vue';
export default {
	name: 'OrderView',
	components: { LeftMenu, Header, OrderTitle, OrderList },
	setup() {
		return {};
	},
};
</script>

<style lang="scss" src="./order-view.scss" scoped />
