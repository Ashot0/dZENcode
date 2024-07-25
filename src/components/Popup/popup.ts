import { Order } from '@/types/order';
export interface Props {
	message: string;
	item: Order;
	onConfirm: () => void;
	isVisible?: boolean;
}
