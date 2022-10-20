import styled, {  } from 'styled-components';
import { color } from '../../../shared/styles/variables'

export const ConnectionWrap = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-right: 10px;
    padding: 11px 28.5px 11px 28.5px;
    border: 2px solid ${color.primaryBlue};
    border-radius: 8px;

    p {
        font-size: 12px;
        line-height: 18px;
    }
`;

export const WalletIcon = styled.img`
    width: 16px;
    margin-right: 8px;
`;