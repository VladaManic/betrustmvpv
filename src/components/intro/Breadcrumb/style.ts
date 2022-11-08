import styled, {  } from 'styled-components';
import { color } from '../../../shared/styles/variables'

export const BreadcrumbWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 30px;
`;

export const LinkWrap = styled.div`
    display: flex;

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
    margin-bottom: 3px;
`;