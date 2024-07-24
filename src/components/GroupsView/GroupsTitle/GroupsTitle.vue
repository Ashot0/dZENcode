<template>
	<div class="groups-title">
		<button class="groups-title__button" type="button">+</button>
		<span>Приходы / {{ allOrders.length }}</span>
	</div>
</template>

<script lang="ts">
import { computed } from 'vue';
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

<style lang="scss" src="./groups-title.scss" scoped />
