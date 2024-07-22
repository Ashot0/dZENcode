<template>
	<transition-group
		class="products-list"
		name="products"
		tag="div"
		@before-leave="handleBeforeLeave"
	>
		<Product
			v-for="(product, index) in products"
			:key="product.id"
			:product="product"
		/>
	</transition-group>
</template>

<script>
import Product from '@/components/ProductsView/Product/Product.vue';

export default {
	components: {
		Product,
	},
	props: {
		products: {
			type: Array,
			required: true,
		},
	},
	methods: {
		handleBeforeLeave(el) {
			el.style.transform = 'translateX(100%)';
			el.style.opacity = '0';
		},
	},
};
</script>

<style lang="scss" scoped src="./products-list.scss" />
