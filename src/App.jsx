import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppHeader from 'components/app-header'
import AppFooter from 'components/app-footer'

import routes from '@/route'
import useScrollTop from '@/hooks/useScrollTop'

// @ => src: webpack
// 问题：react 脚手架隐藏 webpack 配置
//    解决一： npm run enject
//    解决二： carro => create-react-app config

const App = memo(() => {
    useScrollTop()
    return (
        <div className='app'>
            hahahahh
            <AppHeader />
            <Suspense fallback='loading…… '>
                <div className='content'>
                    {useRoutes(routes)}
                </div>
            </Suspense>

            <AppFooter />
        </div>
    )
})

export default App
