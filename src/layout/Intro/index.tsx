import React from 'react'

import League from '../../components/intro/League'
import Statistics from '../../components/intro/Statistics'
import Score from '../../components/intro/Score'

const Intro = () => {
	return (
		<div>
			<League />
			<div>
				<Statistics />
				<Score />
			</div>
		</div>
	)
}

export default Intro