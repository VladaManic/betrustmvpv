import React from 'react'

// Styles
import { AsideWrap, AsideRowWrap, BigDiv, SmallDiv } from './style';

const Aside = () => {
	return (
		<AsideWrap>
			<AsideRowWrap>
				<BigDiv></BigDiv>
				<div>
					<SmallDiv></SmallDiv>
					<SmallDiv></SmallDiv>
				</div>
			</AsideRowWrap>
			<AsideRowWrap>
				<BigDiv></BigDiv>
				<div>
					<SmallDiv></SmallDiv>
					<SmallDiv></SmallDiv>
				</div>
			</AsideRowWrap>
			<AsideRowWrap>
				<BigDiv></BigDiv>
				<div>
					<SmallDiv></SmallDiv>
					<SmallDiv></SmallDiv>
				</div>
			</AsideRowWrap>
			<AsideRowWrap>
				<BigDiv></BigDiv>
				<div>
					<SmallDiv></SmallDiv>
					<SmallDiv></SmallDiv>
				</div>
			</AsideRowWrap>
		</AsideWrap>
	)
}

export default Aside