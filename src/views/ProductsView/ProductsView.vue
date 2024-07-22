<template>
	<div class="products-view">
		<Header />
		<div class="products-view__wrapper">
			<LeftMenu />
			<div class="page-wrapper">
				<ProductsTitle @update:filteredProducts="updateFilteredProducts" />
				<ProductsList :products="filteredProducts" />
			</div>
		</div>
	</div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import LeftMenu from '../../components/LeftMenu/LeftMenu.vue';
import Header from '../../components/Header/Header.vue';
import ProductsTitle from '../../components/ProductsView/ProductsTitle/ProductsTitle.vue';
import ProductsList from '../../components/ProductsView/ProductsList/ProductsList.vue';

export default {
	name: 'ProductsView',
	components: { LeftMenu, Header, ProductsTitle, ProductsList },
	setup() {
		const store = useStore();
		const allProducts = computed(() => store.getters['Products/allProducts']);
		const filteredProducts = ref([]);

		const updateFilteredProducts = (products) => {
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
