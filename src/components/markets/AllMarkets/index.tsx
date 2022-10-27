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
					<BetWrap className={ singleMarket.col_count === 3 ? 'col-3' : 'col-2'}>
						{ singleMarket.event.map((event: any) => (
							<div key={event.id} className="col-item">
								<p className="data-name">{ event.name }</p>
								<p className="bet-price">{ event.price }</p>
							</div>
						))}
					</BetWrap>
				</div>
			))}
		</AllWrapper>
	)
}

export default observer(AllMarkets)