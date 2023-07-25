import styled from 'styled-components'

export const SectionFooterWrapper = styled.div`
    display: flex;
    margin-top: 10px;

    .moreInfo {
        display: flex;
        cursor: pointer;
        align-items: center;
        font-size: 17px;
        font-weight: 700;
        color: ${props => props.color};

        &:hover {
            text-decoration: underline;
        }
        
        span {
            margin-right: 6px;
        }
    }
`