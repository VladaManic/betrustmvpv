import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'

import MarketTitle from '../MarketTitle'
import MarketEvents from '../MarketEvents'

// Styles
import { AllWrapper, SingleWrap } from './style';

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

	const clickHandler = (e: any) => {
		//React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
		const currentClasses = e.currentTarget.parentNode.className;
		const currentArray = currentClasses.split(' ')
		const imprtantClass = currentArray[1];
		if(imprtantClass === 'opened'){
			e.currentTarget.parentNode.className = 'single-market closed';
		} else {
			e.currentTarget.parentNode.className = 'single-market opened';
		}
	}

	return (
		<AllWrapper>
			{ marketDataSorted.map((singleMarket: MarketObj, index) => (
				<SingleWrap key={singleMarket.id}>
					<MarketTitle singleMarket={singleMarket} onClick={clickHandler} />
					<MarketEvents market={singleMarket} />
				</SingleWrap>
			))}
		</AllWrapper>
	)
}

export default observer(AllMarkets)