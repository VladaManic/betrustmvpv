import React from 'react'

// Styles
import { AsideWrap, AsideInner, BigDiv, SmallDiv } from './style';

const Aside = () => {
	return (
		<AsideWrap>
			<AsideInner>
				<BigDiv></BigDiv>
				<div>
					<SmallDiv></SmallDiv>
					<SmallDiv></SmallDiv>
				</div>
			</AsideInner>
			<AsideInner>
				<BigDiv></BigDiv>
				<div>
					<SmallDiv></SmallDiv>
					<SmallDiv></SmallDiv>
				</div>
			</AsideInner>
			<AsideInner>
				<BigDiv></BigDiv>
				<div>
					<SmallDiv></SmallDiv>
					<SmallDiv></SmallDiv>
				</div>
			</AsideInner>
			<AsideInner>
				<BigDiv></BigDiv>
				<div>
					<SmallDiv></SmallDiv>
					<SmallDiv></SmallDiv>
				</div>
			</AsideInner>
		</AsideWrap>
	)
}

export default Aside