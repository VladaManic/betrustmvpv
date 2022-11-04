import { makeAutoObservable } from 'mobx';
import { orderBy } from 'lodash';
import improveName from '../helpers/improveName';

// Types
import { GroupObj, MarketObj, EventObj } from '../types/interfaces';

class Store {
	private loadingState: boolean = true;
	private errorMsg: string = '';
	private sportData: any[] = [];
	private currentGroup: any[] = [];
	private currentGroupName: string = 'All';
	private countArr: any = [];

	constructor(){
		makeAutoObservable(this)
	}

	setLoading = (loading: boolean) => {
		this.loadingState = loading;
	}

	setError = (errorMsg: string) => {
		this.errorMsg = errorMsg;
	}

	setData = (data: {}[]) => {
		this.sportData = data;
	} 

	setCurrentGroup = (data: {}[]) => {
		this.currentGroup = data;
	}

	setCurrentGroupName = (name: string) => {
		this.currentGroupName = name;
	}

	setCountArr = (data: {}[]) => {
		const groupArray: string[] = [];
		data.forEach(function(singleMarket: any) {
			groupArray.push(singleMarket.group_name)
		})
		const uniqueArray = groupArray.filter((item, i, ar) => ar.indexOf(item) === i);
		const countArray: any = [];
		uniqueArray.forEach(function(marketName: string) {
			const count = data.filter((market: any) => market.group_name === marketName).length;
			countArray.push({marketName: marketName, count: count});
		})
		this.countArr = countArray;
	}

	get loading() {
		return this.loadingState;
	}

	get error() {
		return this.errorMsg;
	}

	get allMarkets() {
		return this.sportData[0].region[0].competition[0].game[0].market;
	}

	get gameData() {
		return this.sportData[0].region[0].competition[0].game[0];
	}

	get region() {
		return this.sportData[0].region[0].name;
	}

	get competiotion() {
		return store.sportData[0].region[0].competition[0].name;
	}

	//Getting markets only for specific group
	get group () {
		const markets = this.sportData[0].region[0].competition[0].game[0].market
		const marketData = markets.filter((singleMarket: MarketObj) => singleMarket.group_name === this.currentGroupName)
		return marketData
	}

	//For filter
	get groupsArr() {
		const markets = this.sportData[0].region[0].competition[0].game[0].market
		const countArray = this.countArr;
		const groupArray: any[] = []
		let groupCount: number = 0;
		const finalArray: GroupObj[] = [
			{
				id: 0,
				name: 'All', 
				count: this.sportData[0].region[0].competition[0].game[0].markets_count
			}
		]
		//Get data for every group
		markets.forEach(function(singleMarket: MarketObj) {
			countArray.forEach(function(pair: any){
				if(pair.marketName === singleMarket.group_name){
					groupCount = pair.count;
				}
			})
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
	get currentSorted() {
		const marketDataSorted: MarketObj[] = []
		this.currentGroup.forEach(function(singleMarket: MarketObj) {
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

	get team1Name() {
		return this.sportData[0].region[0].competition[0].game[0].team1_name;
	}

	get team2Name() {
		return this.sportData[0].region[0].competition[0].game[0].team2_name;
	}
}

const store = new Store();

export default store;
