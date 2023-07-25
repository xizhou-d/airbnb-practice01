import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames/bind';

import { TabsWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view';

const SectionTabs = memo((props) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const { tabNames = [], tabClick } = props
    tabNames.push('abc')
    tabNames.push('cba')
    tabNames.push('nba')

    function handleClickItem(itemName, index) {
        setCurrentIndex(index)
        tabClick(itemName, index)
    }
    return (
        <TabsWrapper>
            <ScrollView>
                {
                    tabNames.map((item, index) => {
                        return (
                            <div
                                className={classNames('tabItem', { active: index === currentIndex })}
                                key={index}
                                onClick={() => handleClickItem(item, index)}
                            >
                                {item}
                            </div>
                        )
                    })
                }
            </ScrollView>
        </TabsWrapper>
    )
})

SectionTabs.propTypes = {
    tabsNames: PropTypes.array
}

export default SectionTabs