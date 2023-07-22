import React, { memo, useState, useEffect } from 'react'
import { RightWrapper } from './style'
import IconGlobal from 'assets/svg/icon_global'
import IconAvatar from 'assets/svg/icon_avatar'
import IconMenu from 'assets/svg/icon_menu'

const HeaderRight = memo(() => {
    const [showPanel, setShowPanel] = useState(false)
    // 点击页面空白处关闭 panel
    useEffect(() => {
        window.addEventListener('click', setShowFalse, true)

        return () => {
            window.removeEventListener('click', setShowFalse, true)
        }
    }, [])

    function setShowFalse(e) {
        setShowPanel(false)
    }

    // 事件处理
    function profileHandle(e) {
        setShowPanel(!showPanel)
    }
    return (
        <RightWrapper>
            <div className="btns">
                <span>来爱彼迎发布房源</span>
                <span><IconGlobal /></span>
            </div>
            <div className="profile" onClick={profileHandle}>
                <div className='box'>
                    <IconMenu />
                    <span><IconAvatar /></span>
                </div>
                {
                    showPanel && (
                        <div className="panel">
                            <div className="top">
                                <div className="register">注册</div>
                                <div className="login">登陆</div>
                            </div>
                            <div className="bottom">
                                <div className="rental_housing">出租房源</div>
                                <div className="experience">开展体验</div>
                                <div className="help">帮助</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </RightWrapper>
    )
})

export default HeaderRight