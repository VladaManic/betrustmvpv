export interface Groups {
	id: number,
	name: string,
	count: number,
}

export interface EventObj {
	order: string,
	id: number,
	name: string,
	price: number
}

export interface MarketObj {
	id: number,
	col_count: number,
	name: string,
	event: EventObj[]
}