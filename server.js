const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

let activeTabs = 0;

server.on('connection', (ws) => {
	activeTabs++;
	broadcastActiveTabs();

	ws.on('close', () => {
		activeTabs--;
		broadcastActiveTabs();
	});
});

function broadcastActiveTabs() {
	server.clients.forEach((client) => {
		if (client.readyState === WebSocket.OPEN) {
			client.send(JSON.stringify({ activeTabs }));
		}
	});
}

console.log('WebSocket server is running on ws://localhost:8080');
