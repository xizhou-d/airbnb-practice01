import React, { memo, useState, useCallback } from 'react'

import { HomeSectionWrapperV2 } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
    /** 从 props 获取数据 */
    const { data } = props
    
    /** 定义内部的 state */
    const initialName = Object.keys(data.dest_list)[0]

    const [name, setName] = useState(initialName)
    const tabNames = data.dest_address?.map(item => item.name)

    /** 事件处理函数 */
    const tabClick = useCallback((name, index) => {
        setName(name)
    }, [])

    return (
        <HomeSectionWrapperV2>
            <SectionHeader title={data?.title} subTitle={data.subtitle} />
            <SectionTabs tabNames={tabNames} tabClick={tabClick} />
            <SectionRooms list={data.dest_list?.[name]} itemwidth='33.33%' />
            <SectionFooter name={name} />
        </HomeSectionWrapperV2>
    )
})

export default HomeSectionV2