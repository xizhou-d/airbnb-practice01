import React, { memo, useState, useEffect, useRef } from 'react'

import { ScrollViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
    /** 定义内部状态 */
    const [showRigitButton, setShowRightButton] = useState(false)
    const [showLeftButton, setShowLeftButton] = useState(false) 
    const [posIndex, setPosIndex] = useState(0)
    const totalDistanceRef = useRef()

    /** 组件渲染完毕，判断是否显示右侧按钮 */
    const scrollContentRef = useRef()
    useEffect(() => {
        const scrollWidth = scrollContentRef.current.scrollWidth // 元素在不使用水平滚动条的情况下适合视口中的所有内容所需的最小宽度。
        const clientWidth = scrollContentRef.current.clientWidth
        const totalDistance = scrollWidth - clientWidth
        totalDistanceRef.current = totalDistance

        setShowRightButton(totalDistance > 0)
    }, [props.children])

    function buconttonClickHandle(isRight) {
        /**
         * HTMLElement.offsetLeft 是一个只读属性，返回当前元素左上角相对于 HTMLElement.offsetParent 节点的左边界偏移的像素值。
         * HTMLElement.offsetParent 是一个只读属性，返回一个指向最近的（指包含层级上的最近）包含该元素的定位元素或者最近的 table, td, th, body 元素。
        */
        const newIndex = isRight ? posIndex + 1 : posIndex - 1
        const newEl = scrollContentRef.current.children[newIndex]
        const newElOffsetLeft = newEl.offsetLeft
        scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`
        setPosIndex(newIndex)
        // 是否继续显示右侧按钮
        setShowRightButton(totalDistanceRef.current > newElOffsetLeft)
        setShowLeftButton(newElOffsetLeft > 0)
    }

    return (
        <ScrollViewWrapper>
            { showLeftButton && (
                <div className="control left" onClick={(e) => {buconttonClickHandle(false)}}>
                    <IconArrowLeft />
                </div>
            ) }
            { showRigitButton && (
                <div className="control right" onClick={(e) => {buconttonClickHandle(true)}}>
                    <IconArrowRight />
                </div>
            ) }
            <div className="scroll">
                <div className="scroll-content" ref={scrollContentRef}>
                    {props.children}
                </div>
            </div>
        </ScrollViewWrapper>
    )
})

export default ScrollView 