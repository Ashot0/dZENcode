<template>
	<div>
		<h1>Active Tabs: {{ activeTabs }}</h1>
	</div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface WebSocketData {
	activeTabs: number;
}

export default {
	setup() {
		const activeTabs = ref<number>(0);
		let ws: WebSocket | undefined;

		const connectWebSocket = () => {
			ws = new WebSocket('ws://localhost:8080');

			ws.onmessage = (event: MessageEvent) => {
				const data: WebSocketData = JSON.parse(event.data);
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
