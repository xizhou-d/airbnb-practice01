import React, { memo } from 'react'
import { CenterWrapper } from './style'
import IconSearchBar from 'assets/svg/icon-search-bar'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
        <div className="search-bar">
            <span className='right-seg'>任何地方</span>
            <span className='right-seg'>任意一周</span>
            <span>添加房客</span>
            <span className="search-icon"><IconSearchBar /></span>
        </div>
    </CenterWrapper>
  )
})

export default HeaderCenter