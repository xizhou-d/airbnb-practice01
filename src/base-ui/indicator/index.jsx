import React, { memo, useEffect, useRef } from 'react'

import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
    const { selectIndex = 0 } = props
    const indicatorRef = useRef()

    useEffect(() => {
        const selectedEl = indicatorRef.current.children[selectIndex]
        const itemLeft = selectedEl.offsetLeft
        const itemWidth =selectedEl.clientWidth

        const contentWidth = indicatorRef.current.clientWidth
        let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5

        /**
         * 处理边界
         * prev: 子元素中间线如果在包含快中间线左侧，不需要移动(distance 为负值)
         * next: 如果移动过程中，向左侧移动的总距离的最大距离就是 totalDistance
         */
        if (distance < 0) distance = 0
        const totalDistance = indicatorRef.current.scrollWidth - contentWidth
        if (distance > totalDistance) distance = totalDistance

        indicatorRef.current.style.transform = `translate(${-distance}px)`
    }, [selectIndex]) 
    return (
        <IndicatorWrapper ref={indicatorRef}>
            {
                props.children
            }
        </IndicatorWrapper>
    )
})

export default Indicator