import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'

// Assets
import arrowUp from '../../../assets/img/arrow-up.svg';

// Styles
import { AllWrapper, TitleWrap, ArrowUp, BetWrap } from './style';

const AllMarkets = () => {
	const marketData = store.currentGroup

	return (
		<AllWrapper>
			{ marketData.map((singleMarket: any) => (
				<div key={singleMarket.id}>
					<TitleWrap>
						<p>{ singleMarket.name }</p>
						<ArrowUp src={ arrowUp } alt="Arrow up" />
					</TitleWrap>
					<BetWrap>
						{ singleMarket.event.map((event: any) => (
							<div key={event.id}>
								<p>{ event.name }</p>
								<p>{ event.price }</p>
							</div>
						))}
					</BetWrap>
				</div>
			))}
		</AllWrapper>
	)
}

export default observer(AllMarkets)