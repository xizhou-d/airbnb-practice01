import styled from 'styled-components'

export const RoomWrapper = styled.div`
    box-sizing: border-box;
    width: ${props => props.itemwidth || '25%'};
    padding: 8px;
    flex-shrink: 0;

    .inner {
        width: 100%;
    }
    .swiper {
        position: relative;

        &:hover {
            .control {
                display: flex;
            }
        }
        .control {
            z-index: 1;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            display: none;
            justify-content: space-between;
            color: #fff;

            .btn {
                width: 83px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

                &.right {
                    background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
                }
            }
        }
        .indicator {
            z-index: 2;
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            bottom: 10px;
            width: 40%;
            overflow: hidden;
            .item {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 14.29%;

                .dot {
                    width: 6px;
                    height: 6px;
                    background-color: #fff;
                    border-radius: 50%;

                    &.active {
                        width: 8px;
                        height: 8px;
                        background-color: skyblue;
                    }
                }
            }
        }
    }
    .cover {
        position: relative;
        box-sizing: border-box;
        padding: 66.66% 8px 0;
        border-radius: 3px;
        overflow: hidden;

        img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .desc {
        margin: 10px 0 5px;
        font-size: 12px;
        font-weight: 700;
        color: ${props => props.verifycolor};
      }
    
      .name {
        font-size: 16px;
        font-weight: 700;
    
        overflow: hidden;  
        text-overflow: ellipsis; 
        display: -webkit-box; 
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
      }
    
      .price {
        margin: 8px 0;
        font-family: Circular, -apple-system, "system-ui", Roboto, "Helvetica Neue", sans-serif;
        font-size: 15px;
        
        span:nth-child(1) {
            font-weight: 600;
        }
        span:nth-child(2) {
            font-weight: 400;
        }
      }

      .mark {
        display: flex;
        align-items: center;
        font-size: 12px;
        font-weight: 600;
        color: ${props => props.theme.text.primaryColor};
    
        .count {
          margin: 0 2px 0 4px;
        }
    
        .MuiRating-decimal {
          margin-right: -2px;
        }
      }
`