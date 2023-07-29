import styled from 'styled-components'

export const CenterWrapper = styled.div`
    font-family: "Circular", "-apple-system", "system-ui", "Roboto", "Helvetica Neue", "sans-serif";
    font-weight: 600;
    position: relative;
    height: 48px;
    width: 400px;
    display: flex;
    justify-content: center;

    .search-bar {
        position: absolute;
        width: auto;
        height: 48px;
        display: flex;
        align-items: center;
        border: 1px solid rgb(221, 221, 221);
        border-radius: 40px;
        cursor: pointer;
        ${props => props.theme.mixin.boxShadow};
        color: ${props => props.theme.isAlpha ? '#fff' : props.theme.text.primarycolor};

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
    .search-detail {
        position: relative;
        .infos {
            position: absolute;
            left: 50%;
            top: 60px;
            transform: translateX(-50%);
        }
    }
    .detail-exit {
        transform: scale(1.0) translateY(0);
        opacity: 1;
    }

    .detail-exit-active {
        transition: all 250ms ease;
        transform: scale(0.35, 0.727273) translateY(-58px);
        opacity: 0;
    }

    .detail-enter {
        transform: scale(0.35, 0.727273) translateY(-58px);
        opacity: 0;
    }

    .detail-enter-active {
        transform: scale(1.0) translateY(0);
        opacity: 1;
        transition: all 250ms ease;
    }

    .bar-enter {
        transform: scale(2.85714, 1.375) translateY(58px);
        opacity: 0;
    }

    .bar-enter-active {
        transition: all 250ms ease;
        transform: scale(1.0) translateY(0);
        opacity: 1;
    }

    .bar-exit {
        opacity: 0;
    }
`