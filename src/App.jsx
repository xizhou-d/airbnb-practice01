import React, { memo } from 'react'
import HelloWorld from 'components/hello-world'
import { Link, useRoutes, useNavigate } from 'react-router-dom'

import routes from '@/route'

// @ => src: webpack
// 问题：react 脚手架隐藏 webpack 配置
//    解决一： npm run enject
//    解决二： carro => create-react-app config

const App = memo(() => {
    return (
        <div className='app'>
            <div className='header'>header</div>
            <div className='content'>
                { useRoutes(routes) }
            </div>
            <div className='footer'>footer</div>
        </div>
    )
})

export default App
