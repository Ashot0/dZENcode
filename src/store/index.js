import { createStore } from 'vuex';
import Products from './modules/Products.js';
import Orders from './modules/Orders.js';

export default createStore({
	modules: {
		Products,
		Orders,
	},
});
