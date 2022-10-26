import React from 'react'

import League from '../../components/intro/League'
import Statistics from '../../components/intro/Statistics'
import Score from '../../components/intro/Score'

// Assets
import ballBg from '../../assets/img/ball.svg';

// Styles
import { IntroWrap, IntroInner, BallBg } from './style';

const Intro = () => {
	return (
		<IntroWrap>
			<BallBg src={ ballBg } alt="Ball icon" />
			<League />
			<IntroInner>
				<Statistics />
				<Score />
			</IntroInner>
		</IntroWrap>
	)
}

export default Intro