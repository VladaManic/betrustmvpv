import { makeAutoObservable } from 'mobx';

// interface Todo {
// 	id: number,
// 	title: string
// 	text: string
// }

interface MarketObj {
	id: number,
	col_count: number,
	name: string,
	group_name: string,
	event: object[]
}

class Store {
	// todos: Todo[] = [{
	// 	id: 1,
	// 	title: "Lorem ipsum",
	// 	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
	// },
	// {
	// 	id: 2,
	// 	title: "Fusce fringilla",
	// 	text: "Fusce fringilla diam at volutpat rutrum."
	// },
	// {
	// 	id: 3,
	// 	title: "Nulla ornare",
	// 	text: "Nulla ornare arcu finibus metus suscipit, ac tempus justo hendrerit."
	// }];
	sportData: any[] = [];
	currentGroup: any[] = [];

	constructor(){
		makeAutoObservable(this)
	}

	addData = (data: {}[]) => {
		this.sportData = data;
	} 

	addGroup = (data: {}[]) => {
		this.currentGroup = data;
	} 

	getGroup = (marketName: string) => {
		const markets = this.sportData[0].region[0].competition[0].game[0].market
		const marketObj = markets.filter((singleMarket: MarketObj) => singleMarket.group_name === marketName)
		return marketObj
	}
}

const store = new Store();

export default store;
