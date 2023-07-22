import styled from 'styled-components'

export const CenterWrapper = styled.div`
    font-fimaly: Circular, -apple-system, "system-ui", Roboto, "Helvetica Neue", sans-serif;
    font-weight: 600;

    .search-bar {
        height: 48px;
        display: flex;
        align-items: center;
        border: 1px solid rgb(221, 221, 221);
        border-radius: 40px;
        cursor: pointer;
        ${props => props.theme.mixin.boxShadow}

        span {
            padding: 0 16px;
        }
        span.right-seg {
            box-shadow: 1px 0 #ccc;
        }
        span.search-icon {
            color: #fff;
            padding: 10px;
            border-radius: 50%;
            background-color: ${props => props.theme.color.primaryColor};
            margin-right: 7px;
        }
    }
`