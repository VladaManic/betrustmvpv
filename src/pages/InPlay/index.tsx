import React, { useEffect } from 'react'
import { observer } from "mobx-react"
import store from '../../store/store'

const InPlay = () => {
	const fetchData = () => {
    fetch("http://localhost:4000/sport")
      .then((response) => response.json())
      .then((data) => {
				store.addData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
	useEffect(() => {
    fetchData();
  }, []);

	return (
		<div>
			{/* { store.todos.map((todo: {id: number, title: string, text: string}) => (
				<h2 key={todo.id}>{todo.text}</h2>
			))} */}
		</div>
	)
}

export default observer(InPlay)