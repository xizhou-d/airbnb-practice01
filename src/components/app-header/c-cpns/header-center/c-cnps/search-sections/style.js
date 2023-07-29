import styled from 'styled-components'

export const SearchSectionWrapper = styled.div`
    height: 66px;
    width: 850px;
    border-radius: 32px;
    background-color: green;
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    background-color: #fff;
    .item {
        flex: 1;
        padding: 0 32px;
        .title {
            font-size: 12px;
            font-weight: 800;
            color: #222;
        }

        .desc {
            font-size: 14px;
            color: #666;
        }
    }
    > div:not(.last) {
        box-shadow: 1px 0 #eee;
    }
`