import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'

import MarketWrap from '../MarketWrap'

// Styles
import { AllWrapper } from './style';

// Types
import { MarketObj  } from '../../../types/interfaces';

const AllMarkets = () => {
	const marketData = store.currentGroup
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