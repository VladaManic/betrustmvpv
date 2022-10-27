import { makeAutoObservable } from 'mobx';

// interface Todo {
// 	id: number,
// 	title: string
// 	text: string
// }

interface Market {
	marketData: object[]
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
		let marketObject: Market[] = []
		let currentName;
		const markets = this.sportData[0].region[0].competition[0].game[0].market
		markets.forEach(function(singleMarket: any) {
			currentName = singleMarket.group_name
			if(currentName === marketName){
				marketObject.push(singleMarket)
			}
		})
		return marketObject
	}
}

const store = new Store();

export default store;
