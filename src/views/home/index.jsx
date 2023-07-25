import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { isEmptyObject } from '@/utils/isEmptyObject'

const Home = memo(() => {
    // 获取数据
    const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, loangForInfo } = useSelector((state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
        loangForInfo: state.home.loangForInfo
    }), shallowEqual)
    // 派发网络请求
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHomeDataAction())
    }, [dispatch])

    return (
        <HomeWapper>
            <HomeBanner />
            <div className="content">
                {/* { isEmptyObject(discountInfo) && <HomeSectionV2 data={discountInfo}/> }
                { isEmptyObject(recommendInfo) && <HomeSectionV2 data={recommendInfo}/> } */}
                { isEmptyObject(loangForInfo) && <HomeSectionV3 data={loangForInfo} /> }
                { isEmptyObject(goodPriceInfo) && <HomeSectionV1 data={goodPriceInfo} /> }
                { isEmptyObject(highScoreInfo) && <HomeSectionV1 data={highScoreInfo} /> } 
            </div>
        </HomeWapper>
    )
})

export default Home