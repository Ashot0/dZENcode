<template>
	<div v-if="isVisible" class="popup">
		<div class="popup__content">
			<button class="popup__button-close" @click="close">
				<img src="../../assets/icons/close.png" alt="" />
			</button>
			<p class="popup__message">{{ message }}</p>

			<div class="popup__products">
				<div v-for="product in products" class="popup__product">
					<div
						v-if="product != null"
						:class="
							product.isNew
								? 'popup__is-free-dot popup__is-free-dot_free'
								: 'popup__is-free-dot'
						"
					></div>
					<img
						v-if="product != null"
						class="popup__image"
						:src="`${product.photo}`"
						alt=""
					/>
					<div v-if="product != null" class="popup__title-wrapper">
						<div class="popup__title">{{ product.title }}</div>
						<div class="popup__serial-number">{{ product.serialNumber }}</div>
					</div>
				</div>
			</div>

			<div class="popup__buttons">
				<button class="popup__button-cancel" @click="close">Отменить</button>
				<button class="popup__button-delete" @click="confirm">
					<img src="../../assets/icons/trash-can-red.png" alt="" />Удалить
				</button>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref, watch, defineProps, defineEmits, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { Props } from '@/components/Popup/popup';
import { Order } from '@/types/order';
const props = defineProps<Props>();

const emit = defineEmits<{
	(e: 'update:isVisible', value: boolean): void;
}>();

const isVisible = ref(props.isVisible ?? false);

watch(
	() => props.isVisible,
	(newVal) => {
		isVisible.value = newVal;
	}
);

const close = () => {
	emit('update:isVisible', false);
};

const confirm = () => {
	props.onConfirm();
	close();
};

const store = useStore();

const order = computed<Order | undefined>(() => {
	return store.getters['Orders/getOrderById'](props.item.id);
});

const products = computed(() => {
	return order.value
		? order.value.products.map((productId) =>
				store.getters['Products/getProductById'](productId)
		  )
		: [];
});
</script>

<style scoped src="./popup.scss" lang="scss" />
