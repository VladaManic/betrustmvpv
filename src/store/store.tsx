import React from 'react'
import { makeAutoObservable } from 'mobx';

// interface Todo {
// 	id: number,
// 	title: string
// 	text: string
// }

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

	constructor(){
		makeAutoObservable(this)
	}

	addData = (data: {}[]) => {
		this.sportData = data;
	} 
}

const store = new Store();

export default store;
