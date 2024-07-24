<template>
	<aside class="left-menu">
		<div class="left-menu__profile">
			<img
				class="left-menu__profile-photo"
				src="../../assets/images/ProfilePhoto.jpg"
				alt=""
			/>
			<button class="left-menu__profile-settings" type="button">
				<img
					class="left-menu__profile-settings-img"
					src="../../assets/icons/settings.png"
					alt=""
				/>
			</button>
		</div>
		<nav class="left-menu__links">
			<router-link
				:class="
					block === '/' ? 'left-menu__link active-link' : 'left-menu__link'
				"
				to="/"
			>
				Приход
			</router-link>
			<router-link
				:class="
					block === '/groups'
						? 'left-menu__link active-link'
						: 'left-menu__link'
				"
				to="/groups"
			>
				Группы
			</router-link>
			<router-link
				:class="
					block === '/products'
						? 'left-menu__link active-link'
						: 'left-menu__link'
				"
				to="/products"
			>
				Продукты
			</router-link>
			<router-link
				:class="
					block === '/users'
						? 'left-menu__link active-link'
						: 'left-menu__link '
				"
				to="/users"
			>
				Пользователи
			</router-link>
			<router-link
				:class="
					block === '/settings'
						? 'left-menu__link active-link'
						: 'left-menu__link'
				"
				to="/settings"
			>
				Настройки
			</router-link>
		</nav>
	</aside>
</template>

<script lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
	setup() {
		const route = useRoute();
		const block = computed(() => route.path);
		return { block };
	},
};
</script>

<style lang="scss" scoped src="./left-menu.scss" />
