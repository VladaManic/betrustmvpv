import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'
import clsx from 'clsx';

// Types
import { GroupObj  } from '../../../types/interfaces';

interface Props {
	singleGroup: GroupObj, 
	onClick: any
}

const FilterBtn = ({singleGroup, onClick}: Props) => {
	return (
		<button className={clsx(singleGroup.name === store.groupName ? 'active' : '')} name={ singleGroup.name } onClick={onClick}>{ singleGroup.name } ({ singleGroup.count })</button>
	)
}

export default observer(FilterBtn)