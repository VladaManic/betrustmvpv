import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'

// Styles
import { BtnWrap } from './style';

const clickHandler = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
	e.preventDefault()
	store.setUpdateData();
}

const UpdateBtn = () => {
	return (
		<BtnWrap>
			<button onClick={clickHandler}>Update data</button>
		</BtnWrap>
	)
}

export default observer(UpdateBtn)