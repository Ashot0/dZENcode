const Orders = {
	namespaced: true,
	state() {
		return {
			orders: [
				{
					id: 1,
					title: 'Order 1',
					date: '2017-06-29 12:09:33',
					description: 'desc',
					products: [1, 2, 3, 4, 5, 6, 7, 8, 9],
					// products: [1],
				},
				{
					id: 2,
					title: 'Order 2',
					date: '2017-06-29 12:09:33',
					description: 'desc',
					products: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
					// products: [2],
				},
				{
					id: 3,
					title: 'Order 3',
					date: '2017-06-29 12:09:33',
					description: 'desc',
					// products: [1, 2],
					products: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
				},
			],
		};
	},
	mutations: {
		ADD_ORDER(state, order) {
			state.orders.push(order);
		},
		REMOVE_ORDER(state, orderId) {
			state.orders = state.orders.filter((order) => order.id !== orderId);
		},
	},
	getters: {
		allOrders: (state) => state.orders,
		getOrderById: (state) => (id) =>
			state.orders.find((order) => order.id === id),
	},

	actions: {
		addOrder({ commit }, order) {
			commit('ADD_ORDER', order);
		},
		removeOrder({ commit }, orderId) {
			commit('REMOVE_ORDER', orderId);
		},
	},
};

export default Orders;
