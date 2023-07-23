import PropTypes from 'prop-types'
import React, { memo } from 'react'

import RoomItem from 'components/room-item'
import { RoomWrapper } from './style'

const SectionRooms = memo((props) => {
    const { list = [] } = props
    return (
        <RoomWrapper className='room-list'>
            {
                list?.map(item => {
                    return <RoomItem key={item.id} itemData={item}></RoomItem>
                })
            }
        </RoomWrapper>
    )
})

SectionRooms.propTypes = {
    list: PropTypes.array
}

export default SectionRooms