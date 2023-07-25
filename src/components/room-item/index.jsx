import PropTypes from 'prop-types'
import React, { memo } from 'react'
import Rating from '@mui/material/Rating';

import { RoomWrapper } from './style'

const RoomItem = memo((props) => {
    const { itemData, itemwidth } = props
    return (
        <RoomWrapper verifyolor={itemData?.verify_color || '#39576a'} itemwidth={itemwidth}>
            <div className="inner">
                <div className="cover">
                    <img src={itemData.picture_url} alt="" />
                </div>
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