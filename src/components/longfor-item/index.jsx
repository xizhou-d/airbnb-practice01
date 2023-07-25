import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { LongForItemWapper } from './style'

const LongForItem = memo((props) => {
    const { item } = props
    return (
        <LongForItemWapper>
            <img src={item?.picture_url} alt="" />
            {/* <img src={item?.picture_url} alt="" /> */}
            <div className="bg-cover"></div>
            <div className="info">
                <div className="city">{item.city}</div>
                <div className="price">均价&nbsp;{item.price}</div>
            </div>
        </LongForItemWapper>
    )
})

LongForItem.propTypes = {}

export default LongForItem