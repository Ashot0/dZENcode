<template>
	<div class="order-title">
		<button class="order-title__button" type="button">+</button>
		<span>Приходы / {{ allOrders.length }}</span>
	</div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
	setup() {
		const store = useStore();
		const allOrders = computed(() => store.getters['Orders/allOrders']);
		return {
			allOrders,
		};
	},
};
</script>

<style lang="scss" src="./order-title.scss" scoped />
