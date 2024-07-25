<template>
	<div v-if="product" class="group-product">
		<div
			:class="
				product.isNew
					? 'group-product__is-free-dot group-product__is-free-dot_free'
					: 'group-product__is-free-dot'
			"
		></div>
		<img class="group-product__image" :src="`${product.photo}`" alt="" />
		<div class="group-product__title-wrapper">
			<div class="group-product__title">{{ product.title }}</div>
			<div class="group-product__serial-number">{{ product.serialNumber }}</div>
		</div>
		<div
			:class="
				product.isNew
					? 'group-product__is-free product__is-free_free'
					: 'group-product__is-free'
			"
		>
			{{ product.isNew ? 'свободен' : 'в ремонте' }}
		</div>
		<button
			@click="removeProduct"
			type="button"
			class="group-product__delete-btn"
		>
			<img src="../../../assets/icons/trash-can.png" alt="" />
		</button>
	</div>
</template>
<script lang="ts">
import { computed, onMounted, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { Product } from '@/types/products';
export default defineComponent({
	props: {
		product: {
			type: Object as () => Product,
			required: true,
		},
	},
	setup(props) {
		const store = useStore();

		const removeProduct = () => {
			store.dispatch('Products/deleteProduct', props.product.id);
		};

		return {
			removeProduct,
		};
	},
});
</script>

<style lang="scss" src="./group-product.scss" scoped />
