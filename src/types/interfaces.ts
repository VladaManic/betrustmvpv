export interface GroupObj {
	id: number,
	name: string,
	count: number,
}

export interface MarketObj {
	id: number,
	col_count: number,
	group_order: number,
	name: string,
	group_name: string,
	event: EventObj[]
}

export interface EventObj {
	order: string,
	id: number,
	name: string,
	price: number
}

export interface IReplacement {
	[key: string]: string;
}