import PropTypes from 'prop-types'
import React, { memo } from 'react'
import classNames from 'classnames/bind'

import { SearchTabsWrapper } from './stylle'

const SearchTabs = memo((props) => {
    const { titles, tabClick, selectIndex } = props

    return (
        <SearchTabsWrapper>
            {
                titles && titles.map((item, index) => {
                    return (
                        <div
                            className={classNames("item", { active: index === selectIndex})}
                            key={index}
                            onClick={e => tabClick(index)}
                        >
                            {item}
                        </div>
                    )
                })
            }
        </SearchTabsWrapper>
    )
})

SearchTabs.propTypes = {
    titles: PropTypes.array,
    tabClick: PropTypes.func
}

export default SearchTabs