<template>
	<div class="page-wrapper">
		<OrderTitle />
		<OrderList />
	</div>
</template>

<script lang="ts">
import OrderTitle from '@/components/OrderView/OrderTitle/OrderTitle.vue';
import OrderList from '@/components/OrderView/OrderList/OrderList.vue';
export default {
	name: 'OrderView',
	components: { OrderTitle, OrderList },
	setup() {
		return {};
	},
};
</script>

<style lang="scss" src="./order-view.scss" scoped />
