import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { DetailWrapper } from './style'
import DetailTitle from './c-cpns/detail-title'
import DetailPictrures from './c-cpns/detail-pictures'
import { changeHeadConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeHeadConfigAction({ isFixed: false }))
    }, [dispatch])
    return (
        <DetailWrapper>
            <DetailTitle />
            <DetailPictrures />
        </DetailWrapper>
    )
})

export default Detail