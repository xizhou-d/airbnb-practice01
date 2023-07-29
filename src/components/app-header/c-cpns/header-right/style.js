import styled from 'styled-components'

export const RightWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    color: ${props => props.theme.text.primarycolor};

    .btns {
        display: flex;
        padding: 12px 15px;
        font-family: Circular, -apple-system, "system-ui", Roboto, "Helvetica Neue", sans-serif;
        font-weight: 600;
        align-items: center;
        color: ${props => props.theme.isAlpha ? '#fff' : props.theme.text.primarycolor};
    }
    .btns span {
        height: 18px;
        line-height: 18px;
        padding: 12px 12px;
        border-radius: 22px;
        cursor: pointer;
        &:hover {
            background-color: ${props => props.theme.isAlpha ? 'rgba(255, 255, 255, .1)' : '#f5f5f5'};
        }
    }
    .profile {
        padding: 5px 0 5px 12px;
        position: relative;
        display: flex;
        align-items: center;

        .panel {
            background-color: #fff;
            width: 240px;
            padding: 8px 0;
            border-radius: 8px;
            box-shadow: 0 6px 16px 0 rgba(0,0,0,.08), 0 3px 6px -4px rgba(0,0,0,.12), 0 9px 28px 8px rgba(0,0,0,.05);
            position: absolute;
            right: 0px;
            top: 58px;
    
            .bottom div, .top div {
                height: 40px;
                line-height: 40px;
                padding: 0 12px;
                
                &:hover {
                    background-color: rgba(0,0,0,.04);
                }
            }
            .top {
                box-shadow: 0 1px #eee;
            }
        }
    }
    .profile .box {
        display: flex;
        padding: 5px 12px;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 21px;
        box-sizing: border-box;
        cursor: pointer;
        ${props => props.theme.mixin.boxShadow};
        color: ${props => props.theme.isAlpha ? '#fff' : props.theme.text.primarycolor}
    }
    .profile span {
        margin-left: 12px;
    }
`