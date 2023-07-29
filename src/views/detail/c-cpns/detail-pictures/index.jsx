import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { DetailPicturesWrapper } from './style'
import PictureBrowser from '@/base-ui/picture-browser'
import IconShowAllPic from '@/assets/svg/icon_show_all_pic'

const DetailPictrures = memo((props) => {
    const [showBrowser, setShowBrowser] = useState(false)
    const { detailInfo } = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
    }), shallowEqual)

    function handleBrowserClose() {
        setShowBrowser(false)
    }

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
                                <div key={index}>
                                    <img src={item} alt="" />
                                    <div className="cover"></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="show-all-btn" onClick={e => setShowBrowser(true)}>
                <IconShowAllPic />
                <span>显示所有图片</span>
            </div>
            { showBrowser && <PictureBrowser pictureUrls={detailInfo.picture_urls} handleBrowserClose={handleBrowserClose} />}
        </DetailPicturesWrapper>
    )
})

export default DetailPictrures