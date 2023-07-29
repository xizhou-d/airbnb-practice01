import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeLongFor from './c-cpns/home-longfor'
import { isEmptyObject } from '@/utils/isEmptyObject'
import { changeHeadConfigAction } from '@/store/modules/main'

const Home = memo(() => {
    // 获取数据
    const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, loangForInfo, plusInfo } = useSelector((state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
        loangForInfo: state.home.loangForInfo,
        plusInfo: state.home.plusInfo
    }), shallowEqual)
    // 派发网络请求
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHomeDataAction())
        dispatch(changeHeadConfigAction({ isFixed: true, alpha: true }))
    }, [dispatch])

    return (
        <HomeWapper>
            <HomeBanner />
            <div className="content">
                { isEmptyObject(discountInfo) && <HomeSectionV2 data={discountInfo}/> }
                { isEmptyObject(recommendInfo) && <HomeSectionV2 data={recommendInfo}/> }
                { isEmptyObject(loangForInfo) && <HomeLongFor data={loangForInfo} /> }
                { isEmptyObject(goodPriceInfo) && <HomeSectionV1 data={goodPriceInfo} /> }
                { isEmptyObject(highScoreInfo) && <HomeSectionV1 data={highScoreInfo} /> } 
                { isEmptyObject(plusInfo) && <HomeSectionV3 data={plusInfo} /> } 
            </div>
        </HomeWapper>
    )
})

export default Home