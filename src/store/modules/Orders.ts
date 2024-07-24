import { Module } from 'vuex';
import { RootState } from '../index';

export interface Order {
	id: number;
	title: string;
	date: string;
	description: string;
	products: number[];
}

export interface Form {
	title: string;
	date: string;
	description: string;
	products: number[];
}

export interface OrdersState {
	orders: Order[];
	form: Form;
}

const Orders: Module<OrdersState, RootState> = {
	namespaced: true,
	state: () => ({
		orders: [],
		form: {
			title: '',
			date: '',
			description: '',
			products: [],
		},
	}),
	mutations: {
		SET_ORDERS(state, orders: Order[]) {
			state.orders = orders;
		},
		ADD_ORDER(state, order: Order) {
			state.orders.push(order);
		},
		REMOVE_ORDER(state, orderId: number) {
			state.orders = state.orders.filter((order) => order.id !== orderId);
		},
		SET_FORM(state, formData: Form) {
			state.form = formData;
		},
	},
	getters: {
		allOrders: (state): Order[] => state.orders,
		getOrderById:
			(state) =>
			(id: number): Order | undefined =>
				state.orders.find((order) => order.id === id),
	},
	actions: {
		async loadOrders({ commit }) {
			const mockOrders: Order[] = [
				{
					id: 1,
					title: 'Order 1',
					date: '2017-06-29 12:09:33',
					description: 'desc',
					products: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				},
				{
					id: 2,
					title: 'Order 2',
					date: '2017-06-29 12:09:33',
					description: 'desc',
					products: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
				},
				{
					id: 3,
					title: 'Order 3',
					date: '2017-06-29 12:09:33',
					description: 'desc',
					products: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
				},
			];
			return new Promise<void>((resolve) => {
				setTimeout(() => {
					commit('SET_ORDERS', mockOrders);
					resolve();
				}, 1000);
			});
		},
		addOrder({ commit }, order: Order) {
			commit('ADD_ORDER', order);
		},
		removeOrder({ commit }, orderId: number) {
			commit('REMOVE_ORDER', orderId);
		},
		updateForm({ commit }, formData: Form) {
			commit('SET_FORM', formData);
		},
	},
};

export default Orders;
