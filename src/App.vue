<template>
	<Layout>
		<router-view />
	</Layout>
</template>
<script lang="ts">
import Layout from './layout/BaseLayout/BaseLayout.vue';

export default {
	components: {
		Layout,
	},
};
</script>

<style src="./style/app.scss" lang="scss" />
