import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'

import Market from '../Market';

// Styles
import { AllWrap } from './style';

// Types
import { MarketObj  } from '../../../types/interfaces';

const AllMarkets = () => {
	const marketDataSorted = store.currentSorted

	return (
		<AllWrap>
			{ marketDataSorted.map((singleMarket: MarketObj, index: number) => (
				<Market key={singleMarket.id} singleMarket={singleMarket} index={index} />
			))}
		</AllWrap>
	)
}

export default observer(AllMarkets)