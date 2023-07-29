import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import classNames from 'classnames/bind'

import { BrowserWrapper } from './style'
import Indicator from '../indicator'
import IconClose from '@/assets/svg/icon_close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'

const PictureBrowser = memo((props) => {
    const { pictureUrls, handleBrowserClose } = props
    const [selectIndex, setSelectIndex] = useState(0)
    const [isNext, setIsNext] = useState(true)
    const [showInfo, setShowInfo] = useState(true)

    useEffect(() => {
        /** 当图片浏览器显示的时候，禁用浏览器的滚动 */
        document.body.style.overflow = "hidden"
        /** 当关闭图片浏览器时，要恢复对滚动的禁用 */
        return () => {
            document.body.style.overflow = "auto"
        }
    })

    function handleBtnClick() {
        if (handleBrowserClose) handleBrowserClose(false)
    }

    function handleTogglePicture(isNext = true) {
        let newIndex = selectIndex
        newIndex = isNext ? newIndex + 1 : newIndex - 1
        if (newIndex > pictureUrls.length - 1) newIndex = 0
        if (newIndex < 0) newIndex = pictureUrls.length - 1

        setSelectIndex(newIndex)
        setIsNext(isNext)
    }

    function handleToggleInfo() {
        setShowInfo(!showInfo)
    }

    function handlePreviewClick(index) {
        setSelectIndex(index)
        setIsNext(index > selectIndex)
    }

    return (
        <BrowserWrapper isnext={isNext} showinfo={showInfo}>
            <div className="top" onClick={handleBtnClick}>
                <div className="close">
                    <IconClose />
                </div>
            </div>
            <div className="swiper">
                <div className="control">
                    <div className="btn prev" onClick={(e) => handleTogglePicture(false)}>
                        <IconArrowLeft width='77' height='77' />
                    </div>

                    <div className="btn next" onClick={(e) => handleTogglePicture(true)}>
                        <IconArrowRight width='77' height='77' />
                    </div>
                </div>
                <div className="picture">
                    <SwitchTransition mode="out-in">
                        <CSSTransition
                            key={pictureUrls[selectIndex]}
                            classNames="pic_ani"
                            timeout={200}
                        >
                            <img src={pictureUrls[selectIndex]} alt="" />
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
            <div className="preview-list">
                <div className="info">
                    <div className="desc">
                        <div className="left">
                            <span>{selectIndex + 1}/{pictureUrls.length}</span>
                            <span>room apartment图片{selectIndex + 1}</span>
                        </div>
                        <div className="right" onClick={handleToggleInfo}>
                            <span style={{ marginRight: "5px" }}>隐藏照片列表</span>
                            {showInfo ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop />}
                        </div>
                    </div>
                    <div className='indicator'>
                        <Indicator selectIndex={selectIndex}>
                            {
                                pictureUrls.map((item, index) => {
                                    return (
                                        <div className={classNames("pic", { active: index === selectIndex })} key={index} onClick={e => handlePreviewClick(index)}>
                                            <img src={item} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </Indicator>
                    </div>
                </div>
            </div>
        </BrowserWrapper >
    )
})

PictureBrowser.propTypes = {
    pictureUrls: PropTypes.array,
    handleBrowserClose: PropTypes.func
}

export default PictureBrowser