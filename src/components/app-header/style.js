import styled from 'styled-components'

export const HeaderWrapper = styled.div` 
    

    &.fixed {
        position: fixed;
        z-index: 3;
        top: 0;
        right: 0;
        left: 0;
    }

    .content-header {
        position: relative;
        z-index: 3;
        background-color: ${props => props.theme.isAlpha ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)'};
        .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 80px;
            padding: 0 40px;
        }
        box-shadow: 0 1px ${props => props.theme.isAlpha ? 'rgba(255, 255, 255, 0)' : '#eee'};
    }

    .cover {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .3);
    }
`

export const SearchAreaWrapper = styled.div`
    transition: height 200ms ease;
    height: ${props => props.issearch ? "100px": "0"};
`