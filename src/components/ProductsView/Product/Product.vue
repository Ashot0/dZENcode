<template>
	<div class="product">
		<div
			:class="
				product.isNew
					? 'product__is-free-dot product__is-free-dot_free'
					: 'product__is-free-dot'
			"
		></div>
		<img class="product__image" :src="`${product.photo}`" alt="" />
		<div class="product__title-wrapper">
			<div class="product__title">{{ product.title }}</div>
			<div class="product__serial-number">{{ product.serialNumber }}</div>
		</div>
		<div
			:class="
				product.isNew
					? 'product__is-free product__is-free_free'
					: 'product__is-free'
			"
		>
			{{ product.isNew ? 'свободен' : 'в ремонте' }}
		</div>
		<div class="product__guarantee">
			<div class="product__date-guarantee">
				C :   
				<span class="product__date-guarantee_big-text">{{
					formattedDateStart
				}}</span>
			</div>
			<div class="product__date-guarantee">
				По :
				<span class="product__date-guarantee_big-text">{{
					formattedDateEnd
				}}</span>
			</div>
		</div>
		<div class="product__is-new">{{ product.isNew ? 'Новый' : 'Б/у' }}</div>
		<div class="product__prise">
			<div class="product__prise-usd">{{ product.price[0].value }}$</div>
			<div class="product__prise-uah">
				{{ product.price[1].value
				}}<span class="product__prise-uah_little">UAH</span>
			</div>
		</div>
		<div class="product__group">{{ product.group ? product.group : '-' }}</div>
		<div class="product__name">{{ product.name ? product.name : '-' }}</div>
		<div class="product__order">
			<span v-if="order">{{ order.title }}</span
			> 
		</div>
		<div class="product__date">
			<div class="product__date_top">{{ formattedDate1 }}</div>
			<div class="product__date_bottom">{{ formattedDate2 }}</div>
		</div>
		<button @click="removeProduct" type="button" class="product__delete-btn">
			<img src="../../../assets/icons/trash-can.png" alt="" />
		</button>
	</div>
</template>

<script>
import { computed } from 'vue';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useStore } from 'vuex';
export default {
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
	setup(props) {
		const date = new Date(props.product.date);
		const formattedDate1 = format(date, 'dd / MM');
		const formattedDate2 = format(date, 'dd / MMM / yyyy', { locale: ru });

		const dateStart = new Date(props.product.guarantee.start);
		const dateEnd = new Date(props.product.guarantee.end);
		const formattedDateStart = format(dateStart, 'dd / MM / yyyy');
		const formattedDateEnd = format(dateEnd, 'dd / MM / yyyy');

		const store = useStore();
		const order = computed(() =>
			store.getters['Orders/getOrderById'](props.product.order)
		);
		const removeProduct = () => {
			store.dispatch('Products/deleteProduct', props.product.id);
		};

		return {
			order,
			formattedDate1,
			formattedDate2,
			formattedDateStart,
			formattedDateEnd,
			removeProduct,
		};
	},
};
</script>

<style lang="scss" src="./product.scss" scoped />
