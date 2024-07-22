import { createRouter, createWebHistory } from 'vue-router';
import OrderView from '../views/OrderView/OrderView.vue';
import GroupsView from '../views/GroupsView/GroupsView.vue';
import ProductsView from '../views/ProductsView/ProductsView.vue';
import UsersView from '../views/UsersView/UsersView.vue';
import SettingsView from '../views/SettingsView/SettingsView.vue';

const routes = [
	{
		path: '/',
		name: 'order',
		component: OrderView,
	},
	{
		path: '/groups',
		name: 'groups',
		component: GroupsView,
	},
	{
		path: '/products',
		name: 'products',
		component: ProductsView,
	},
	{
		path: '/users',
		name: 'users',
		component: UsersView,
	},
	{
		path: '/settings',
		name: 'settings',
		component: SettingsView,
	},
	{
		path: '/:catchAll(.*)',
		name: 'start',
		component: OrderView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
