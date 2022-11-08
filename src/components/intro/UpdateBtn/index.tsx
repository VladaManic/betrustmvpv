import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'

// Styles
import { BtnWrap } from './style';

const clickHandler = () => {
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