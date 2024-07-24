import { createStore } from 'vuex';
import Products from './modules/Products';
import Orders from './modules/Orders';
import { ProductsState } from './modules/Products';
import { OrdersState } from './modules/Orders';

export interface RootState {
	Products: ProductsState;
	Orders: OrdersState;
}

const store = createStore<RootState>({
	modules: {
		Products,
		Orders,
	},
});

export default store;
