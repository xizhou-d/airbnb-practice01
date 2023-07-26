import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { DetailPicturesWrapper } from './style'

const DetailPictrures = memo((props) => {
    const { detailInfo } = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
    }))
    console.log('detailInfo', detailInfo)

    return (
        <DetailPicturesWrapper>
            <div className="content">
                <div className="left">
                    <div>
                        <img src={detailInfo?.picture_urls[0]} alt="" />
                        <div className="cover"></div>
                    </div>
                </div>
                <div className="right">
                    {
                        detailInfo?.picture_urls.slice(1, 5).map((item, index) => {
                            return (
                                <div>
                                    <img src={item} alt="" />
                                    <div className="cover"></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </DetailPicturesWrapper>
    )
})

DetailPictrures.propTypes = {}

export default DetailPictrures