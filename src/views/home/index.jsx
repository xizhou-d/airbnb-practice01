import React, { memo, useState, useEffect } from 'react'

import hyRequest from '@/services'

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
        <div>
            <h2>{ highScore.title }</h2>
            <h3>{ highScore.subtitle }</h3>
            <ul>
                {
                    highScore?.list?.map(item => {
                        return <li key={item.id}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
})

export default Home