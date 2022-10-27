import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'

// Assets
import arrowUp from '../../../assets/img/arrow-up.svg';

// Styles
import { AllWrapper, ArrowUp, BetWrap } from './style';

const AllMarkets = () => {
	const marketData = store.currentGroup

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
			{ marketData.map((singleMarket: any, index) => (
				<div key={singleMarket.id} className={index < 5 ? 'single-market opened' : 'single-market closed'}>
					<div className="title-wrap" onClick={clickHandler}>
						<p>{ singleMarket.name }</p>
						<ArrowUp src={ arrowUp } alt="Arrow up" />
					</div>
					<BetWrap className={ singleMarket.col_count === 3 ? 'col-bet col-3' : 'col-bet col-2'}>
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