<template>
	<div>
		<h1>Active Tabs: {{ activeTabs }}</h1>
	</div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
	setup() {
		const activeTabs = ref(0);
		let ws;

		const connectWebSocket = () => {
			ws = new WebSocket('ws://localhost:8080');

			ws.onmessage = (event) => {
				const data = JSON.parse(event.data);
				activeTabs.value = data.activeTabs;
			};

			ws.onclose = () => {
				setTimeout(connectWebSocket, 1000);
			};
		};

		onMounted(() => {
			connectWebSocket();
		});

		onUnmounted(() => {
			if (ws) {
				ws.close();
			}
		});

		return {
			activeTabs,
		};
	},
};
</script>
