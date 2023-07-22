import React, { memo, useState, useEffect } from 'react'

import hyRequest from '@/services'
import { HomeWapper } from './style'
import HomeBanner from './c-cpns/home-banner'

const Home = memo(() => {
    const [highScore, setHighScore] = useState({})
    // 网络请求的代码
    useEffect(() => {
        hyRequest.get({ url: "/home/highscore" }).then(res => {
            console.log('res', res)
            setHighScore(res)
        })
    }, [])

    return (
        <HomeWapper>
            <HomeBanner />
        </HomeWapper>
    )
})

export default Home