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
	group_id: number,
	group_name: string,
	event: object[]
}

interface GroupData {
	id: number,
	name: string,
	count: number
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

	getGroupsObj = () => {
		const markets = this.sportData[0].region[0].competition[0].game[0].market
		let groupArray: any[] = []
		let groupCount: number
		let finalArray: GroupData[] = [
			{
				id: 0,
				name: 'All', 
				count: this.sportData[0].region[0].competition[0].game[0].markets_count
			}
		]
		markets.forEach(function(singleMarket: MarketObj) {
			groupCount = store.getGroup(singleMarket.group_name).length
			groupArray.push({id: singleMarket.group_id, name: singleMarket.group_name, count: groupCount})
		})
		const uniqueArray = groupArray.filter((value: any, index: number, self: any) =>
			index === self.findIndex((t: any) => (
				t.place === value.place && t.name === value.name
			))
		)
		uniqueArray.forEach(function(singleObj: GroupData) {
			if(singleObj.count > 0){
				finalArray.push(singleObj)
			}
		})
		return finalArray
	}
}

const store = new Store();

export default store;
