<template>
	<div v-if="order" class="order">
		<p class="order__title">{{ order.title }}</p>
		<button class="order__menu-button" type="button">
			<img
				class="order__menu-button-img"
				src="../../../assets/icons/menu.png"
				alt=""
			/>
		</button>
		<div class="order__products-num">
			<p class="order__products-num_num">{{ productsCount }}</p>
			<p class="order__products-num_text">Продукта</p>
		</div>
		<div class="order__date">
			<p class="order__date-top">{{ formattedDate1 }}</p>
			<p class="order__date-bottom">{{ formattedDate2 }}</p>
		</div>
		<div class="order__sum">
			<p class="order__sum-usd">{{ totalPrice0 }} $</p>
			<p class="order__sum-uah">
				{{ totalPrice1 }} <span class="order__sum-uah_little">UAH</span>
			</p>
		</div>
		<button @click="showPopup" class="order__delete-button" type="button">
			<img src="../../../assets/icons/trash-can.png" alt="" />
		</button>
		<Popup
			:message="popupMessage"
			:item="order"
			:onConfirm="handleConfirm"
			:isVisible="isPopupVisible"
			@update:isVisible="updateVisibility"
		/>
	</div>
</template>

<script lang="ts">
import { computed, ref, defineComponent } from 'vue';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useStore } from 'vuex';
import Popup from '../../../components/Popup/Popup.vue';
import { Order } from '../../../types/order';
export default defineComponent({
	components: {
		Popup,
	},
	props: {
		order: {
			type: Object as () => Order,
			required: true,
		},
	},
	setup(props) {
		const store = useStore();

		const productsCount = computed(() => {
			return props.order
				? store.getters['Products/getProductsCountByOrder'](props.order.id)
				: 0;
		});

		const isPopupVisible = ref<boolean>(false);
		const popupMessage = ref<string>(
			'Вы уверены, что хотите удалить этот приход?'
		);

		const showPopup = () => {
			if (productsCount.value !== 0) {
				isPopupVisible.value = true;
			} else {
				removeOrder();
			}
		};

		const handleConfirm = () => {
			removeOrder();
			isPopupVisible.value = false;
		};

		const updateVisibility = (visibility: boolean) => {
			isPopupVisible.value = visibility;
		};

		const removeOrder = () => {
			if (props.order) {
				store.dispatch('Orders/removeOrder', props.order.id);
			}
		};

		const date = props.order ? new Date(props.order.date) : new Date();
		const formattedDate1 = format(date, 'dd / MM');
		const formattedDate2 = format(date, 'dd / MMM / yyyy', { locale: ru });

		const getProductById = (id: string) => {
			return store.getters['Products/getProductById'](id);
		};

		const calculateTotalPrice = (priceIndex: number) => {
			if (productsCount.value === 0) {
				return 0;
			}
			return props.order.products.reduce((total, id) => {
				const product = getProductById(id);
				if (product?.price?.[priceIndex]) {
					return total + product.price[priceIndex].value;
				}
				return total;
			}, 0);
		};

		const totalPrice0 = computed(() => calculateTotalPrice(0));
		const totalPrice1 = computed(() => calculateTotalPrice(1));

		return {
			formattedDate1,
			formattedDate2,
			totalPrice0,
			totalPrice1,
			isPopupVisible,
			popupMessage,
			showPopup,
			handleConfirm,
			updateVisibility,
			productsCount,
		};
	},
});
</script>

<style lang="scss" src="./order.scss" scoped></style>
