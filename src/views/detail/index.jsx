import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { DetailWrapper } from './style'
import DetailTitle from './c-cpns/detail-title'
import DetailPictrures from './c-cpns/detail-pictures'

const Detail = memo(() => {
    return (
        <DetailWrapper>
            <DetailTitle />
            <DetailPictrures />
        </DetailWrapper>
    )
})

export default Detail