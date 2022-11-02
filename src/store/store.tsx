import { makeAutoObservable } from 'mobx';
import { orderBy } from 'lodash';
import improveName from '../helpers/improveName';

// Types
import { GroupObj, MarketObj, EventObj } from '../types/interfaces';

class Store {
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
		const marketData = markets.filter((singleMarket: MarketObj) => singleMarket.group_name === marketName)
		return marketData
	}

	getGroupsArr = () => {
		const markets = this.sportData[0].region[0].competition[0].game[0].market
		let groupArray: any[] = []
		let groupCount: number
		let finalArray: GroupObj[] = [
			{
				id: 0,
				name: 'All', 
				count: this.sportData[0].region[0].competition[0].game[0].markets_count
			}
		]
		//Get data for every group
		markets.forEach(function(singleMarket: MarketObj) {
			groupCount = store.getGroup(singleMarket.group_name).length
			groupArray.push({id: singleMarket.group_id, name: singleMarket.group_name, count: groupCount})
		})
		//Get only unique objects for groups
		const uniqueArray = groupArray.filter((value: any, index: number, self: any) =>
			index === self.findIndex((t: any) => (
				t.place === value.place && t.name === value.name
			))
		)
		//Sort array
		const sortedArray = uniqueArray.sort((a, b) => parseInt(a.id) - parseInt(b.id));
		//Concat group objects to array with default All markets object
		sortedArray.forEach(function(singleObj: GroupObj) {
			//If no markets in that group, don't show
			if(singleObj.count > 0){
				finalArray.push(singleObj)
			}
		})
		return finalArray
	}

	getCurrentSorted = (marketData: MarketObj[]) => {
		let marketDataSorted: MarketObj[] = []
		marketData.forEach(function(singleMarket: MarketObj) {
			const eventsSorted = orderBy(singleMarket.event, ['order']);
			let eventsData: EventObj[] = []
			eventsSorted.forEach(function(singleEvent: EventObj) {
				eventsData.push({...singleEvent, name: improveName(singleEvent.name)})
			})
			marketDataSorted.push({...singleMarket, event: eventsData})
		})
		return marketDataSorted
	}

	getTeam1Name = () => {
		const name = this.sportData[0].region[0].competition[0].game[0].team1_name;
		return name;
	}

	getTeam2Name = () => {
		const name = this.sportData[0].region[0].competition[0].game[0].team2_name;
		return name;
	}
}

const store = new Store();

export default store;
