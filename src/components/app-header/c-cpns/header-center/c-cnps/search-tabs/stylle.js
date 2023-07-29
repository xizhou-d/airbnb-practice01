import styled from 'styled-components'

export const SearchTabsWrapper = styled.div`
    display: flex;
    color: ${props => props.theme.isAlpha ? '#fff' : '#222'};
    .item {
        margin: 10px 16px;
        font-size: 16px;

        &.active {
            box-shadow: 0 2px ${props => props.theme.isAlpha ? '#fff' : '#222'};
        }
    }
`