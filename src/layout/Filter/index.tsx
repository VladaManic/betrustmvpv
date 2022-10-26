import React from 'react'

import FilterItems from '../../components/filter/FilterItems'

// Assets
import btnLeft from '../../assets/img/button-left.svg';
import btnRight from '../../assets/img/button-right.svg';

// Styles
import { FilterWrap, BtnLeft, BtnRight } from './style';

const Filter = () => {
	return (
		<FilterWrap>
			<BtnLeft src={btnLeft} alt="Arrow left" />
			<FilterItems />
			<BtnRight src={btnRight} alt="Arrow right" />
		</FilterWrap>
	)
}

export default Filter