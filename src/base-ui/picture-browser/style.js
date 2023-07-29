import styled from 'styled-components'

export const BrowserWrapper = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #333;
    display: flex;
    flex-direction: column;
    .top {
        height: 86px;
        flex-shrink: 0;
        .close {
            position: absolute;
            right: 10px;
            top: 10px;
            cursor: pointer;
        }
    }
    .swiper {
        position: relative;
        flex: 1;
        .control {
            z-index: 1;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .btn {
                cursor: pointer;
            }
        }
        .picture {
            max-width: 105vh;
            position: relative;
            height: 100%;
            margin: auto;
            img {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }

            /** 动画的样式 */
            .pic_ani-enter {
                transform: translateX(${props => props.isnext ? '100%' :  '-100%'});
                opacity: 0;
            }

            .pic_ani-enter-active {
                transform: translateX(0);
                opacity: 1;
                transition: all 200ms ease;
            }

            .pic_ani-exit {
                opacity: 1;
            }

            .pic_ani-exit-active {
                opacity: 0;
                transition: all 200ms ease;
            }
        }
    }
    .preview-list {
        /* height: 100px; */
        color: #fff;
        .info {
            max-width: 105vh;
            margin: 10px auto;
        }
        .desc {
            display: flex;
            justify-content: space-between;
            .right {
                cursor: pointer;
            }
        }
        .indicator {
            overflow: hidden;
            margin: 3px auto;
            flex-shrink: 0;
            transition: height 300ms ease;
            height: ${props => props.showinfo ? "67px": "0"};

            .pic {
                width: 100px;
                margin-right: 15px;
                cursor: pointer;
                img {
                    width: 100%;
                    opacity: 0.5;
                    &:hover {
                        opacity: 1;
                    }
                }
                &.active {
                    img {
                        opacity: 1;
                    }
                }
            }
        }
    }
`