import styled, {  } from 'styled-components';
import { color } from '../../shared/styles/variables'

export const HeaderWrap = styled.header`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: ${color.headerBg};
`;