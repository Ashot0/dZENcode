<template>
	<div class="header-right-block">
		<div class="header-right-block__date">
			<div class="header-right-block__top">
				{{ day }}
				<ActiveTabs />
			</div>
			<strong>{{ dateNumber }}</strong
			> <span style="text-transform: uppercase">{{ month }}</span
			>,
			<span>{{ year }}</span>
			<img
				class="header-right-block__clock-icon"
				src="../../assets/icons/clock.png"
				alt=""
			/>
			<span>{{ time }}</span>
		</div>
	</div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import ActiveTabs from '../ActiveTabs/ActiveTabs.vue';
export default {
	name: 'HeaderRight',
	components: { ActiveTabs },
	setup() {
		const now = ref(new Date());

		const updateDateTime = () => {
			now.value = new Date();
		};

		onMounted(() => {
			updateDateTime();
			const interval = setInterval(updateDateTime, 1000);
			onUnmounted(() => clearInterval(interval));
		});

		const day = computed(() =>
			now.value.toLocaleDateString('en-US', { weekday: 'long' })
		);
		const dateNumber = computed(() => now.value.getDate());
		const month = computed(() =>
			now.value.toLocaleDateString('en-US', { month: 'long' })
		);
		const year = computed(() => now.value.getFullYear());
		const time = computed(() =>
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
