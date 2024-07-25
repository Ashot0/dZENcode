<template>
	<div class="group">
		<button class="group__menu-button" type="button">
			<img
				class="group__menu-button-img"
				src="../../../assets/icons/menu.png"
				alt=""
			/>
		</button>
		<div class="group__products-num">
			<p class="group__products-num_num">
				{{ productsCount }}
			</p>
			<p class="group__products-num_text">Продукта</p>
		</div>
		<div class="group__date">
			<p class="group__date-top">{{ formattedDate1 }}</p>
			<p class="group__date-bottom">{{ formattedDate2 }}</p>
		</div>
		<div class="group__open">
			<img src="../../../assets/icons/right-arrow.png" alt="" />
		</div>
	</div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useStore } from 'vuex';
import { GroupProps } from './group';
export default {
	props: {
		group: {
			type: Object as () => GroupProps['group'],
			required: true,
		},
	},
	setup(props: GroupProps) {
		const store = useStore();
		const date = new Date(props.group.date);
		const formattedDate1 = format(date, 'dd / MM');
		const formattedDate2 = format(date, 'dd / MMM / yyyy', { locale: ru });

		const productsCount = computed(() =>
			store.getters['Products/getProductsCountByOrder'](props.group.id)
		);

		return {
			formattedDate1,
			formattedDate2,
			productsCount,
		};
	},
};
</script>

<style lang="scss" src="./group.scss" scoped />
