import styled, {  } from 'styled-components';

export const IntroWrap = styled.div`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 142px;
	background: linear-gradient(270deg, rgba(19, 19, 19, 0.45) 0%, rgba(241, 31, 31, 0.22) 100%)
`;

export const BallBg = styled.img`
	position: absolute;
	top: -20px;
	left: -20px;
	width: 180px;
	z-index: -1;
`;

export const IntroInner = styled.div`
	display: flex;
	padding-right: 12px;
	padding-bottom: 14px;
	padding-left: 12px;
`;