<template>
	<div class="header-right-block">
		<div class="header-right-block__date">
			<div class="header-right-block__top">
				{{ day }}
				<ActiveTabs />
			</div>
			<strong>{{ dateNumber }}</strong>
			<span style="text-transform: uppercase">{{ month }}</span
			>,
			<span>{{ year }}</span>
			<img
				class="header-right-block__clock-icon"
				src="../../assets/icons/clock.png"
				alt="Clock icon"
			/>
			<span>{{ time }}</span>
		</div>
	</div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted, computed, Ref, ComputedRef } from 'vue';
import ActiveTabs from '../ActiveTabs/ActiveTabs.vue';

export default {
	name: 'HeaderRight',
	components: { ActiveTabs },
	setup() {
		const now: Ref<Date> = ref(new Date());

		const updateDateTime = () => {
			now.value = new Date();
		};

		onMounted(() => {
			updateDateTime();
			const interval = setInterval(updateDateTime, 1000);
			onUnmounted(() => clearInterval(interval));
		});

		const day: ComputedRef<string> = computed(() =>
			now.value.toLocaleDateString('en-US', { weekday: 'long' })
		);
		const dateNumber: ComputedRef<number> = computed(() => now.value.getDate());
		const month: ComputedRef<string> = computed(() =>
			now.value.toLocaleDateString('en-US', { month: 'long' })
		);
		const year: ComputedRef<number> = computed(() => now.value.getFullYear());
		const time: ComputedRef<string> = computed(() =>
			now.value.toLocaleTimeString('en-US', {
				hour: '2-digit',
				minute: '2-digit',
				hour12: false,
			})
		);

		return {
			day,
			dateNumber,
			month,
			year,
			time,
		};
	},
};
</script>

<style lang="scss" src="./header-right.scss" scoped />
