import styled, {  } from 'styled-components';
import { color } from '../../../shared/styles/variables'

export const BreadcrumbWrap = styled.div`
    display: flex;
    padding-top: 16px;
    padding-left: 30px;
    padding-bottom: 16px;

    p {
        font-size: 14px;
        line-height: 18px;
        color: ${color.breadcrumbGrey};
    }
`;

export const ArrowLeft = styled.img`
    display: inline-block;
    width: 6px;
    margin-right: 7px;
`;