import React, { memo, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { CenterWrapper } from './style'
import IconSearchBar from 'assets/svg/icon-search-bar'
import SearchTitles from '@/assets/data/search_titles'
import SearchTabs from './c-cnps/search-tabs'
import SearchSections from './c-cnps/search-sections'

const HeaderCenter = memo((props) => {
    const titles = SearchTitles.map(item => item.title)
    const [selectIndex, setSelectIndex] = useState(0)
    const { isSearch, toggleIsSearch } = props

    function tabClick(index) {
        setSelectIndex(index)
    }

    function handleToggleIsSearch() {
        if (toggleIsSearch) toggleIsSearch()
    }
    return (
        <CenterWrapper>
            {/* {
                !isSearch ? (
                    <div className="search-bar" onClick={handleToggleIsSearch}>
                        <span className='right-seg'>任何地方</span>
                        <span className='right-seg'>任意一周</span>
                        <span>添加房客</span>
                        <span className="search-icon"><IconSearchBar /></span>
                    </div>
                ) : (
                    <div className="search-detail">
                        <SearchTabs titles={titles} selectIndex={selectIndex} tabClick={tabClick} />
                        <div className="infos">
                            <SearchSections searchInfos={SearchTitles[selectIndex].searchInfos} />
                        </div>
                    </div>
                )
            } */}
            <CSSTransition
                in={!isSearch}
                timeout={250}
                classNames="bar"
                // 动画完成之后自动卸载组件 
                unmountOnExit={true}
            >
                <div className="search-bar" onClick={handleToggleIsSearch}>
                    <span className='right-seg'>任何地方</span>
                    <span className='right-seg'>任意一周</span>
                    <span>添加房客</span>
                    <span className="search-icon"><IconSearchBar /></span>
                </div>
            </CSSTransition>
            <CSSTransition
                in={isSearch}
                timeout={250}
                classNames="detail"
                unmountOnExit={true}
            >
                <div className="search-detail">
                    <SearchTabs titles={titles} selectIndex={selectIndex} tabClick={tabClick} />
                    <div className="infos">
                        <SearchSections searchInfos={SearchTitles[selectIndex].searchInfos} />
                    </div>
                </div>
            </CSSTransition>
        </CenterWrapper>
    )
})

export default HeaderCenter