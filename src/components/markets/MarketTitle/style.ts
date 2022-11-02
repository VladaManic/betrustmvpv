import styled, {  } from 'styled-components';
import { color } from '../../../shared/styles/variables';

export const TitleWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 28px;
	padding: 12px;
	margin-bottom: 10px;
	background-color: ${color.asideBg};
	border-radius: 10px;
	cursor: pointer;

	p {
		font-size: 14px;
		line-height: 18px;
		font-weight: 500;
		color: ${color.mainWhite};
	}

	&.active {
		img {
			transform: rotate(180deg);
		}
	}
`;

export const ArrowUp = styled.img`
	width: 14px;
`;