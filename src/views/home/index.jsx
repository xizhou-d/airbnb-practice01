import React, { memo, useState, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionHeader from 'components/section-header'
import SectionRooms from 'components/section-rooms'

const Home = memo(() => {
    // 获取数据
    const { goodPriceInfo } = useSelector((state) => ({
        goodPriceInfo: state.home.goodPriceInfo
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
                <SectionHeader title={goodPriceInfo.title} subTitle={goodPriceInfo?.subTitle} />
                <SectionRooms list={goodPriceInfo.list} />
            </div>
        </HomeWapper>
    )
})

export default Home