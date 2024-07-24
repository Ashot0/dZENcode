import { Module } from 'vuex';
import { RootState } from '../index';
import Image from '../../assets/images/300.png';

export interface Price {
	value: number;
	symbol: string;
	isDefault: number;
}

export interface Guarantee {
	start: string;
	end: string;
}

export interface Product {
	id: number;
	serialNumber: number;
	isNew: number;
	photo: string;
	title: string;
	type: string;
	specification: string;
	guarantee: Guarantee;
	price: Price[];
	order: number;
	date: string;
}

export interface Form {
	serialNumber: string;
	isNew: number;
	photo: string;
	title: string;
	type: string;
	specification: string;
	guarantee: Guarantee;
	price: Price[];
	order: number;
	date: string;
}

export interface ProductsState {
	products: Product[];
	form: Form;
}

const Products: Module<ProductsState, RootState> = {
	namespaced: true,
	state: () => ({
		products: [],
		form: {
			serialNumber: '',
			isNew: 0,
			photo: '',
			title: '',
			type: '',
			specification: '',
			guarantee: {
				start: '',
				end: '',
			},
			price: [
				{ value: 0, symbol: 'USD', isDefault: 0 },
				{ value: 0, symbol: 'UAH', isDefault: 1 },
			],
			order: 0,
			date: '',
		},
	}),
	mutations: {
		SET_PRODUCTS(state, products: Product[]) {
			state.products = products;
		},
		ADD_PRODUCT(state, product: Product) {
			state.products.push(product);
		},
		DELETE_PRODUCT(state, productId: number) {
			state.products = state.products.filter(
				(product) => product.id !== productId
			);
		},
		SET_FORM(state, formData: Form) {
			state.form = formData;
		},
	},
	getters: {
		allProducts: (state): Product[] => state.products,
		getProductById:
			(state) =>
			(id: number): Product | undefined =>
				state.products.find((product) => product.id === id),
		getProductBySerialNumber:
			(state) =>
			(serialNumber: number): Product | undefined =>
				state.products.find((product) => product.serialNumber === serialNumber),
		getProductsByOrder:
			(state) =>
			(order: number): Product[] =>
				state.products.filter((product) => product.order === order),
		getProductsCountByOrder:
			(state, getters) =>
			(order: number): number =>
				getters.getProductsByOrder(order).length,
	},
	actions: {
		async loadProducts({ commit }) {
			const mockProducts: Product[] = [
				{
					id: 1,
					serialNumber: 1234,
					isNew: 1,
					photo: Image,
					title: 'Product 1',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 1,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 2,
					serialNumber: 1234,
					isNew: 1,
					photo: Image,
					title: 'Product 2',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 1,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 3,
					serialNumber: 1235,
					isNew: 0,
					photo: Image,
					title: 'Product 3',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 1,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 4,
					serialNumber: 1236,
					isNew: 1,
					photo: Image,
					title: 'Product 4',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 1,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 5,
					serialNumber: 1237,
					isNew: 1,
					photo: Image,
					title: 'Product 5',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 1,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 6,
					serialNumber: 1238,
					isNew: 1,
					photo: Image,
					title: 'Product 6',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 1,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 7,
					serialNumber: 1239,
					isNew: 1,
					photo: Image,
					title: 'Product 7',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 1,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 8,
					serialNumber: 1240,
					isNew: 1,
					photo: Image,
					title: 'Product 8',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 1,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 9,
					serialNumber: 1241,
					isNew: 1,
					photo: Image,
					title: 'Product 9',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 1,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 10,
					serialNumber: 1242,
					isNew: 1,
					photo: Image,
					title: 'Product 10',
					type: 'Video card',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 2,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 11,
					serialNumber: 1243,
					isNew: 1,
					photo: Image,
					title: 'Product 11',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 2,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 12,
					serialNumber: 1244,
					isNew: 1,
					photo: Image,
					title: 'Product 12',
					type: 'Video card',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 2,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 13,
					serialNumber: 1245,
					isNew: 1,
					photo: Image,
					title: 'Product 13',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 2,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 14,
					serialNumber: 1246,
					isNew: 1,
					photo: Image,
					title: 'Product 14',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 2,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 15,
					serialNumber: 1247,
					isNew: 1,
					photo: Image,
					title: 'Product 15',
					type: 'Video card',
					specification: 'Specification 3',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 2,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 16,
					serialNumber: 1248,
					isNew: 1,
					photo: Image,
					title: 'Product 16',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 2,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 17,
					serialNumber: 1249,
					isNew: 0,
					photo: Image,
					title: 'Product 17',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 2,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 18,
					serialNumber: 1250,
					isNew: 1,
					photo: Image,
					title: 'Product 18',
					type: 'Monitors',
					specification: 'Specification 3',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 2,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 19,
					serialNumber: 1251,
					isNew: 1,
					photo: Image,
					title: 'Product 19',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 2,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 20,
					serialNumber: 1252,
					isNew: 1,
					photo: Image,
					title: 'Product 20',
					type: 'Video card',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 3,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 21,
					serialNumber: 1253,
					isNew: 0,
					photo: Image,
					title: 'Product 21',
					type: 'Video card',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 3,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 22,
					serialNumber: 1254,
					isNew: 1,
					photo: Image,
					title: 'Product 22',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 3,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 23,
					serialNumber: 1255,
					isNew: 1,
					photo: Image,
					title: 'Product 23',
					type: 'Monitors',
					specification: 'Specification 2',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 3,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 24,
					serialNumber: 1256,
					isNew: 0,
					photo: Image,
					title: 'Product 24',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 3,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 25,
					serialNumber: 1257,
					isNew: 1,
					photo: Image,
					title: 'Product 25',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 3,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 26,
					serialNumber: 1258,
					isNew: 1,
					photo: Image,
					title: 'Product 26',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 3,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 27,
					serialNumber: 1259,
					isNew: 1,
					photo: Image,
					title: 'Product 27',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 3,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 28,
					serialNumber: 1260,
					isNew: 1,
					photo: Image,
					title: 'Product 28',
					type: 'Monitors',
					specification: 'Specification 2',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 3,
					date: '2017-06-29 12:09:33',
				},
				{
					id: 29,
					serialNumber: 1261,
					isNew: 1,
					photo: Image,
					title: 'Product 29',
					type: 'Monitors',
					specification: 'Specification 1',
					guarantee: {
						start: '2017-06-29 12:09:33',
						end: '2017-06-29 12:09:33',
					},
					price: [
						{ value: 100, symbol: 'USD', isDefault: 0 },
						{ value: 2600, symbol: 'UAH', isDefault: 1 },
					],
					order: 3,
					date: '2017-06-29 12:09:33',
				},
			];
			return new Promise<void>((resolve) => {
				setTimeout(() => {
					commit('SET_PRODUCTS', mockProducts);
					resolve();
				}, 1000);
			});
		},
		addProduct({ commit }, product: Product) {
			commit('ADD_PRODUCT', product);
		},
		deleteProduct({ commit }, productId: number) {
			commit('DELETE_PRODUCT', productId);
		},
		updateForm({ commit }, formData: Form) {
			commit('SET_FORM', formData);
		},
	},
};

export default Products;
