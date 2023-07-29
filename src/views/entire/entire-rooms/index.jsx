import React, { memo, useCallback } from 'react'

import { RoomsWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {
    /** Get room list data from store */
    const { roomList, totalCount, isLoading } = useSelector(state => ({
        roomList: state.entire.roomList,
        totalCount: state.entire.totalCount,
        isLoading: state.entire.isLoading
    }), shallowEqual)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const itemClick = useCallback((detailData) => {
        dispatch(changeDetailInfoAction(detailData))
        navigate('/detail')
    }, [dispatch, navigate])
    return (
        <RoomsWrapper>
            <div className='title'>{totalCount}多处住房</div>
            <div className="list">
                {
                    roomList?.map((data, index) => {
                        return <RoomItem itemData={data} itemwidth="20%" key={data._id} itemClick={itemClick} />
                    })
                }
            </div>
            {/* 遮罩层 */}
            { isLoading && (<div className="cover"></div>) }
        </RoomsWrapper>
    )
})

export default EntireRooms