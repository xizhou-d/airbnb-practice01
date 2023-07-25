import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { RoomsWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'

const EntireRooms = memo((props) => {
    /** Get room list data from store */
    const { roomList, totalCount, isLoading } = useSelector(state => ({
        roomList: state.entire.roomList,
        totalCount: state.entire.totalCount,
        isLoading: state.entire.isLoading
    }), shallowEqual)
    return (
        <RoomsWrapper>
            <div className='title'>{totalCount}多处住房</div>
            <div className="list">
                {
                    roomList?.map((data, index) => {
                        return <RoomItem itemData={data} itemwidth="20%" key={Date._id} />
                    })
                }
            </div>
            {/* 遮罩层 */}
            { isLoading && (<div className="cover"></div>) }
        </RoomsWrapper>
    )
})

EntireRooms.propTypes = {}

export default EntireRooms