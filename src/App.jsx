import React, { memo } from 'react'
import { Link, useRoutes, useNavigate } from 'react-router-dom'
import AppHeader from 'components/app-header'
import AppFooter from 'components/app-footer'

import routes from '@/route'

// @ => src: webpack
// 问题：react 脚手架隐藏 webpack 配置
//    解决一： npm run enject
//    解决二： carro => create-react-app config

const App = memo(() => {
    return (
        <div className='app'>
            <AppHeader />
            <div className='content'>
                { useRoutes(routes) }
            </div>
            <AppFooter />
        </div>
    )
})

export default App
