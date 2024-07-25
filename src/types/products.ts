export interface Product {
	id: number;
	isNew: boolean;
	serialNumber: number;
	guarantee: Guarantee;
	title: string;
	photo: string;
	price: PriceInner[];
	group: string;
	name: string;
	type: string;
	specification: string;
}
export interface Guarantee {
	start: string;
	end: string;
}
export interface PriceInner {
	value: number;
}
