<template>
	<div class="base-layout">
		<Header />
		<div class="base-layout__wrapper">
			<LeftMenu />
			<main>
				<slot />
			</main>
		</div>
	</div>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import LeftMenu from '@/components/LeftMenu/LeftMenu.vue';
import Header from '@/components/Header/Header.vue';

export default {
	components: {
		LeftMenu,
		Header,
	},
	setup() {
		const store = useStore();

		onMounted(async () => {
			await store.dispatch('Products/loadProducts');
			await store.dispatch('Orders/loadOrders');
		});
	},
};
</script>

<style scoped lang="scss" src="./base-layout.scss"></style>
