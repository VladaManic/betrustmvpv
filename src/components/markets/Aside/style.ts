import styled, {  } from 'styled-components';
import { color } from '../../../shared/styles/variables';

export const AsideWrap = styled.div`
    width: 332px;
    height: 462px;
    padding: 24px;
		background-color: ${color.asideBg};
    border-radius: 10px;
`;

export const AsideInner = styled.div`
    display: flex;
`;

export const BigDiv = styled.div`
    width: 104px;
    height: 104px;
    margin-right: 12px;
    margin-bottom: 16px;
		background: linear-gradient(0deg, ${color.asideGradient}, ${color.asideGradient}), ${color.asideGradient};
    border-radius: 8px;
`;

export const SmallDiv = styled.div`
    width: 216px;
    height: 46px;
    margin-bottom: 8px;
    border: 1px solid ${color.asideBorder};
    border-radius: 8px;
`;