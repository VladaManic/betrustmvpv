export interface GroupObj {
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
	group_id: number,
	name: string,
	group_name: string,
	event: EventObj[]
}