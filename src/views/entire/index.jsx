import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { EntireWrapper } from './style'
import EntireFilter from './entire-filter'
import EntireRooms from './entire-rooms'
import EntirePagination from './entire-pagination'
import { fetchEntireDataAction } from '@/store/modules/entire/createActions'

const Entire = memo(() => {
    const { curPage } = useSelector((state) => ({
        curPage: state.entire.curPage
    }), shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchEntireDataAction())
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