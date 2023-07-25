import styled from 'styled-components'

export const LongForItemWapper = styled.div`
    box-sizing: border-box;
    padding: 8px;
    width: 20%;
    flex-shrink: 0;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }
    .bg-cover {
        position: absolute;
        left: 8px;
        right: 8px;
        bottom: 8px;
        height: 60%;
        border-radius: 4px;
        background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)
    }
    .info {
        box-sizing: border-box;
        position: absolute;
        bottom: 25px;
        color: #fff;
        top: 8px;
        left: 8px;
        right: 8px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;

        .city {
            font-size: 18px;
            font-weight: 600;
        }

        .price {
            font-size: 14px;
            margin-top: 5px;
        }
  }
`