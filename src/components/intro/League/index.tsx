import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'

const League = () => {
	return (
		<div>
			<p>{ store.sportData[0].region[0].name } / { store.sportData[0].region[0].competition[0].name }</p>
		</div>
	)
}

export default observer(League)