import { makeAutoObservable } from 'mobx';
import { orderBy } from 'lodash';
import improveName from '../helpers/improveName';

// Types
import { GroupObj, MarketObj, EventObj } from '../types/interfaces';

class Store {
	private sportData: any[] = [];
	private currentGroup: any[] = [];

	constructor(){
		makeAutoObservable(this)
	}

	addData = (data: {}[]) => {
		this.sportData = data;
	} 

	addGroup = (data: {}[]) => {
		this.currentGroup = data;
	} 

	getAllMarkets = () => {
		const markets = this.sportData[0].region[0].competition[0].game[0].market;
		return markets;
	}

	getGameData = () => {
		const game = this.sportData[0].region[0].competition[0].game[0];
		return game;
	}

	getRegion = () => {
		const region = this.sportData[0].region[0].name;
		return region;
	}

	getCompetiotion = () => {
		const competition = store.sportData[0].region[0].competition[0].name;
		return competition;
	}

	getCurrentGroup = () => {
		return this.currentGroup;
	}

	//Getting markets only for specific group
	getGroup = (marketName: string) => {
		const markets = this.sportData[0].region[0].competition[0].game[0].market
		const marketData = markets.filter((singleMarket: MarketObj) => singleMarket.group_name === marketName)
		return marketData
	}

	//For filter
	getGroupsArr = () => {
		const markets = this.sportData[0].region[0].competition[0].game[0].market
		const groupArray: any[] = []
		let groupCount: number
		const finalArray: GroupObj[] = [
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

	//Sort events in markets and improving names before displaying
	getCurrentSorted = (marketData: MarketObj[]) => {
		const marketDataSorted: MarketObj[] = []
		marketData.forEach(function(singleMarket: MarketObj) {
			// Sort events
			const eventsSorted = orderBy(singleMarket.event, ['order']);
			const eventsData: EventObj[] = []
			eventsSorted.forEach(function(singleEvent: EventObj) {
				// Improve names for events
				eventsData.push({...singleEvent, name: improveName(singleEvent.name, false)})
			})
			// Improve names for markets
			marketDataSorted.push({...singleMarket, event: eventsData, name: improveName(singleMarket.name, true)})
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
