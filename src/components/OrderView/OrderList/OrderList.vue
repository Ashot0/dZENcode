<template>
	<div class="order-list">
		<Order v-for="(order, index) in allOrders" :key="index" :order="order" />
	</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Order from '@/components/OrderView/Order/Order.vue';

export default {
	components: {
		Order,
	},
	setup() {
		const store = useStore();
		const allOrders = computed(() => store.getters['Orders/allOrders']);

		return {
			allOrders,
		};
	},
};
</script>

<style lang="scss" src="./order-list.scss" scoped />
