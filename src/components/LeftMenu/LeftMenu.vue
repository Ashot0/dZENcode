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
					block === '/dZENcode-gitpages/'
						? 'left-menu__link active-link'
						: 'left-menu__link'
				"
				to="/dZENcode-gitpages/"
			>
				Приход
			</router-link>
			<router-link
				:class="
					block === '/dZENcode-gitpages/groups'
						? 'left-menu__link active-link'
						: 'left-menu__link'
				"
				to="/dZENcode-gitpages/groups"
			>
				Группы
			</router-link>
			<router-link
				:class="
					block === '/dZENcode-gitpages/products'
						? 'left-menu__link active-link'
						: 'left-menu__link'
				"
				to="/dZENcode-gitpages/products"
			>
				Продукты
			</router-link>
			<router-link
				:class="
					block === '/dZENcode-gitpages/users'
						? 'left-menu__link active-link'
						: 'left-menu__link '
				"
				to="/dZENcode-gitpages/users"
			>
				Пользователи
			</router-link>
			<router-link
				:class="
					block === '/dZENcode-gitpages/settings'
						? 'left-menu__link active-link'
						: 'left-menu__link'
				"
				to="/dZENcode-gitpages/settings"
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
