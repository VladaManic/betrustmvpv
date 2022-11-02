import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'

import MarketWrap from '../MarketWrap'

// Styles
import { AllWrapper } from './style';

const AllMarkets = () => {
	const marketData = store.currentGroup

	interface EventObj {
		order: string,
		id: number,
		name: string,
		price: number
	}

	interface MarketObj {
		id: number,
		col_count: number,
		name: string,
		event: EventObj[]
	}

	//Sort events before displaying them
	const marketDataSorted = store.getCurrentSorted(marketData)

	return (
		<AllWrapper>
			{ marketDataSorted.map((singleMarket: MarketObj, index: number) => (
				<MarketWrap key={singleMarket.id} singleMarket={singleMarket} index={index} />
			))}
		</AllWrapper>
	)
}

export default observer(AllMarkets)