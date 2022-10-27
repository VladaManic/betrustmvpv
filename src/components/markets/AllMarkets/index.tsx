import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'

const AllMarkets = () => {
	const marketData = store.currentGroup

	return (
		<div>
			{ marketData.map((singleMarket: any) => (
				<div key={singleMarket.id}>
					<div>
						<p>{ singleMarket.name }</p>
					</div>
					<div>
						{ singleMarket.event.map((event: any) => (
							<div key={event.id}>
								<p>{ event.name }</p>
								<p>{ event.price }</p>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default observer(AllMarkets)