import React, { memo, useRef, useState } from 'react'

import { HeaderWrapper, SearchAreaWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

/**
 * 在搜索状态下，如果滚动条（垂直方向上）滚动超过 30px 就恢复非搜索状态
 */

const AppHeader = memo(() => {
    /** 组件内部状态 */
    const [isSearch, setIsSearch] = useState(false)

    /** 获取 redux 数据 */
    const { headerConfig } = useSelector((state) => ({
        headerConfig: state.main.headerConfig
    }), shallowEqual)
    const { isFixed, alpha } = headerConfig

    /** 监听 scroll 位置 */
    const { scrollY } = useScrollPosition()
    const prevY = useRef(0)

    // 非搜索状态，记录滚动时的实时位置
    if (!isSearch) prevY.current = scrollY
    // 搜索状态下，滚动超过 30px 就恢复成 非搜索状态
    if (isSearch && Math.abs(prevY.current - scrollY) > 30) setIsSearch(false)

    /** 是否透明的逻辑 */
    const isAlpha = alpha && scrollY === 0

    return (
        <ThemeProvider theme={{isAlpha}}>
            <HeaderWrapper className={classNames({ fixed: isFixed })}>
                <div className="content-header">
                    <div className="top">
                        <HeaderLeft />
                        <HeaderCenter isSearch={isAlpha || isSearch} toggleIsSearch={e => setIsSearch(true)} />
                        <HeaderRight />
                    </div>
                    <SearchAreaWrapper issearch={isSearch}></SearchAreaWrapper>
                </div>
                {isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div>}
            </HeaderWrapper>
        </ThemeProvider>
    )
})

export default AppHeader