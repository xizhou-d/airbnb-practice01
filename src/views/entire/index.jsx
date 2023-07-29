import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { EntireWrapper } from './style'
import EntireFilter from './entire-filter'
import EntireRooms from './entire-rooms'
import EntirePagination from './entire-pagination'
import { fetchEntireDataAction } from '@/store/modules/entire/createActions'
import { changeHeadConfigAction } from '@/store/modules/main'

const Entire = memo(() => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchEntireDataAction())
        dispatch(changeHeadConfigAction({ isFixed: true }))
    }, [dispatch])

    return (
        <EntireWrapper>
            <EntireFilter />
            <EntireRooms />
            <EntirePagination />
        </EntireWrapper>
    )
})

export default Entire