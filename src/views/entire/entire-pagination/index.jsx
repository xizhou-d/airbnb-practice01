import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { PaginationWrapper } from './style'
import { fetchEntireDataAction } from '@/store/modules/entire/createActions';

const EntirePagination = memo((props) => {
    const { totalCount, curPage, roomList } = useSelector((state) => ({
        totalCount: state.entire.totalCount,
        curPage: state.entire.curPage,
        roomList: state.entire.roomList
    }), shallowEqual)

    const dispatch = useDispatch()
    function handleChange(e, value) {
        /** 切换页码后滚动到顶部 */
        window.scrollTo(0, 0)
        dispatch(fetchEntireDataAction(value - 1 ))
    }

    const totalPage = Math.ceil(totalCount / 20)
    const startCount = (curPage) * 20 + 1
    const endCount = (curPage + 1) * 20 > totalCount ? totalCount : (curPage + 1) * 20

    return (
        <PaginationWrapper>
            {
                roomList?.length > 0 && (
                        <div className="pagination-info">
                        <Pagination count={totalPage} onChange={handleChange} />
                        <div className='desc'>
                            {`第 ${startCount}-${endCount} 个房源`}，共超过 {totalCount} 个房源
                        </div>
                    </div>
                )
            }
        </PaginationWrapper>
    )
})

export default EntirePagination