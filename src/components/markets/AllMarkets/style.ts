import styled, {  } from 'styled-components';
import { color } from '../../../shared/styles/variables';

export const AllWrapper = styled.div`
		flex: 1;
		margin-right: 32px;
`;

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

		p {
			font-size: 14px;
			line-height: 18px;
			font-weight: 500;
		}
`;

export const ArrowUp = styled.img`
    width: 14px;
`;

export const BetWrap = styled.div`
    width: 100%;
`;