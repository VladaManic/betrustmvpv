import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'
import clsx from 'clsx';

// Styles
import { FilterItemWrap } from './style';

// Types
import { GroupObj  } from '../../../types/interfaces';

interface Props {
	singleGroup: GroupObj, 
	onClick: any
}

const FilterBtn = ({singleGroup, onClick}: Props) => {
	return (
		<FilterItemWrap>
			<button className={clsx(singleGroup.name === store.groupName ? 'active' : '')} name={ singleGroup.name } onClick={onClick}>{ singleGroup.name } ({ singleGroup.count })</button>
		</FilterItemWrap>
	)
}

export default observer(FilterBtn)