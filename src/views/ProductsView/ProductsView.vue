<template>
	<div class="page-wrapper">
		<ProductsTitle @update:filteredProducts="updateFilteredProducts" />
		<ProductsList :products="filteredProducts" />
	</div>
</template>

<script lang="ts">
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import ProductsTitle from '../../components/ProductsView/ProductsTitle/ProductsTitle.vue';
import ProductsList from '../../components/ProductsView/ProductsList/ProductsList.vue';
import { Store } from 'vuex';
import { RootState } from '@/store/index';

export default {
	name: 'ProductsView',
	components: { ProductsTitle, ProductsList },
	setup() {
		const store = useStore<RootState>();

		const allProducts = computed<Object[]>(
			() => store.getters['Products/allProducts']
		);
		const filteredProducts = ref<Object[]>([]);

		const updateFilteredProducts = (products: Object[]) => {
			filteredProducts.value = products;
		};

		return {
			allProducts,
			filteredProducts,
			updateFilteredProducts,
		};
	},
};
</script>

<style lang="scss" src="./products-view.scss" scoped />
