import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';

import { RoomWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
    const { itemData, itemwidth, itemClick } = props
    const swiperRef = useRef()
    const [selectIndex, setSelectIndex] = useState(0)

    function handleBtnClick(isRight = true) {
        isRight ? swiperRef.current.next() : swiperRef.current.prev()
        let newIndex = isRight ? selectIndex + 1 : selectIndex - 1

        const length = itemData.picture_urls.length
        if (newIndex > length - 1) newIndex = 0
        if (newIndex < 0) newIndex = length - 1
        setSelectIndex(newIndex)
    }

    function handleItemClick(detailData) {
        if (itemClick) {
            itemClick(detailData)
        }
    }
    const PicElement = (
        <div className="cover">
            <img src={itemData.picture_url} alt="" />
        </div>
    )

    const SliderElement = (
        <div className="swiper">
            <div className="control">
                <div className="btn left" onClick={(e) => handleBtnClick(false)}>
                    <IconArrowLeft width='30' height='30' />
                </div>
                <div className="btn right" onClick={(e) => handleBtnClick(true)}>
                    <IconArrowRight width='30' height='30' />
                </div>
            </div>
            <div className="indicator">
                <Indicator selectIndex={selectIndex}>
                    {
                        itemData?.picture_urls?.map((item, index) => {
                            return (
                                <div className="item" key={index}>
                                    <span className={classNames('dot', { active: selectIndex === index })}></span>
                                </div>
                            )
                        })
                    }
                </Indicator>
            </div>
            <Carousel dots={false} ref={swiperRef}>
                {
                    itemData?.picture_urls?.map((item, index) => {
                        return (
                            <div className="cover" key={item + index}>
                                <img src={item} alt="" />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
    return (
        <RoomWrapper verifyolor={itemData?.verify_color || '#39576a'} itemwidth={itemwidth} onClick={e => handleItemClick(itemData)}>
            <div className="inner">
                {
                    itemData?.picture_urls ? SliderElement : PicElement
                }
                <div className="desc">{itemData?.verify_info?.messages.join('.')}</div>
                <div className="name">{itemData.name}</div>
                <div className="price">
                    <span>{itemData.price_format}&nbsp;</span>
                    <span>晚</span>
                </div>
                <div className="mark">
                    <Rating name="read-only" value={itemData.star_rating ?? 5} precision={0.5} sx={{ fontSize: '12px', color: 'green' }} readOnly />
                    <span className='count'>{itemData.reviews_count}</span>
                    {
                        itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
                    }
                </div>
            </div>
        </RoomWrapper>
    )
})

RoomItem.propTypes = {
    itemData: PropTypes.object
}

export default RoomItem