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

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Product from '@/components/ProductsView/Product/Product.vue';

export default defineComponent({
	components: {
		Product,
	},
	props: {
		products: {
			type: Array as PropType<any[]>,
			required: true,
		},
	},
	setup() {
		const handleBeforeLeave = (el: HTMLElement) => {
			el.style.transform = 'translateX(100%)';
			el.style.opacity = '0';
		};

		return {
			handleBeforeLeave,
		};
	},
});
</script>

<style lang="scss" scoped src="./products-list.scss" />
