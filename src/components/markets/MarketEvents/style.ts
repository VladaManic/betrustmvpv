import styled, {  } from 'styled-components';

export const BetWrap = styled.div`
	.col-bet {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
    width: 103.1%;
	}

	&.col-2 {
		.col-bet {
			div {
				flex-basis: 49%;
			}
		}
		
	}

	&.col-3 {
		.col-bet {
			div {
				flex-basis: 32%;
			}
		}
	}
`;