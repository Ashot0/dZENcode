<template>
	<div class="products-title">
		<p class="products-title__title">
			Продукты / {{ filteredProducts.length }}
		</p>
		<span class="products-title__small-text">Тип:</span>
		<select
			v-model="selectedType"
			name="select"
			class="products-title__search-type"
		>
			<option value="">Все</option>
			<option v-for="type in uniqueTypes" :key="type" :value="type">
				{{ type }}
			</option>
		</select>
		<span class="products-title__small-text">Спецификация:</span>
		<select
			v-model="selectedSpecification"
			class="products-title__search-specification"
		>
			<option value="">Все</option>
			<option v-for="spec in uniqueSpecifications" :key="spec" :value="spec">
				{{ spec }}
			</option>
		</select>
	</div>
</template>

<script lang="ts">
import { computed, ref, watch, SetupContext } from 'vue';
import { useStore } from 'vuex';

import { Product } from '@/types/products';

export default {
	setup(_: any, { emit }: SetupContext) {
		const store = useStore();
		const allProducts = computed<Product[]>(
			() => store.getters['Products/allProducts']
		);

		const selectedType = ref<string>('');
		const selectedSpecification = ref<string>('');

		const uniqueTypes = computed(() => {
			const types = allProducts.value.map((product) => product.type);
			return [...new Set(types)];
		});

		const uniqueSpecifications = computed(() => {
			const specifications = allProducts.value.map(
				(product) => product.specification
			);
			return [...new Set(specifications)];
		});

		const filteredProducts = computed(() => {
			return allProducts.value.filter((product) => {
				return (
					(selectedType.value === '' || product.type === selectedType.value) &&
					(selectedSpecification.value === '' ||
						product.specification === selectedSpecification.value)
				);
			});
		});

		const emitFilteredProducts = () => {
			emit('update:filteredProducts', filteredProducts.value);
		};

		watch(
			[selectedType, selectedSpecification, allProducts],
			emitFilteredProducts,
			{ immediate: true }
		);

		return {
			allProducts,
			selectedType,
			selectedSpecification,
			uniqueTypes,
			uniqueSpecifications,
			filteredProducts,
		};
	},
};
</script>

<style lang="scss" src="./products-title.scss" scoped />
