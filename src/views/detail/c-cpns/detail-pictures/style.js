import styled from 'styled-components'

export const DetailPicturesWrapper = styled.div`
    .content {
        width: 100%;
        display: flex;

        > div {
            box-sizing: border-box;
            flex: 1;
        }
    }
    .left {
        width: 50%;
        padding: 25% 0;
        position: relative;
        .cover {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: rgba(0,0,0,.3);
            opacity: 1;
            transition: opacity 200ms ease;

            &:hover {
                opacity: 0;
            }
        }
        img {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease-in;
        }
        &:hover {
            img {
                transform: scale(1.01);
            }
        }
    }
    .right {
        display: flex;
        flex-wrap: wrap;
        width: 50%;
        margin: -4px -4px -4px 4px;

        > div {
            box-sizing: border-box;
            width: 50%;
            position: relative;
            padding: 25%;
            flex: 1 0;
            img {
                position: absolute;
                padding: 4px;
                box-sizing: border-box;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s ease-in;
            }

            .cover {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-color: rgba(0,0,0,.3);
                margin: 4px;
                opacity: 1; 
                transition: opacity 200ms ease;

                &:hover {
                    opacity: 0;
                }
            }
            &:hover {
                img {
                    transform: scale(1.01);
                }
            }
        }
    }
`