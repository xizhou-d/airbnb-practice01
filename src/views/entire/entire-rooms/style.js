import styled from 'styled-components'

export const RoomsWrapper = styled.div`
    padding: 18px 20px;
    position: relative;
    margin-top: 128px;

    .title {
        font-size: 22px;
        font-weight: 700;
        color: #222;
        padding-left: 8px;
    }
    .list {
        display: flex;
        flex-wrap: wrap;
    }
    > .cover {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(255, 255, 255, .8);
    }
`