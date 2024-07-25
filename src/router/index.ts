import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import OrderView from '../views/OrderView/OrderView.vue';
import GroupsView from '../views/GroupsView/GroupsView.vue';
import ProductsView from '../views/ProductsView/ProductsView.vue';
import UsersView from '../views/UsersView/UsersView.vue';
import SettingsView from '../views/SettingsView/SettingsView.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/dZENcode-gitpages/',
		name: 'order',
		component: OrderView,
	},
	{
		path: '/dZENcode-gitpages/groups',
		name: 'groups',
		component: GroupsView,
	},
	{
		path: '/dZENcode-gitpages/products',
		name: 'products',
		component: ProductsView,
	},
	{
		path: '/dZENcode-gitpages/users',
		name: 'users',
		component: UsersView,
	},
	{
		path: '/dZENcode-gitpages/settings',
		name: 'settings',
		component: SettingsView,
	},
	{
		path: '/dZENcode-gitpages/:catchAll(.*)',
		name: 'start',
		component: OrderView,
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
