import { makeAutoObservable, observable, toJS } from 'mobx';

interface Todo {
	title: string
	text: string
}

class Store {
	todos: Todo[] = [{
		title: "Lorem ipsum",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
	},
	{
		title: "Fusce fringilla",
		text: "Fusce fringilla diam at volutpat rutrum."
	},
	{
		title: "Nulla ornare",
		text: "Nulla ornare arcu finibus metus suscipit, ac tempus justo hendrerit."
	}];

	constructor(){
		makeAutoObservable(this)
	}
}

const store = new Store();
export default store;