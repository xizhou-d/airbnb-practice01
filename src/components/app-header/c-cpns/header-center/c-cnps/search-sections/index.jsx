import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SearchSectionWrapper } from './style'
import classNames from 'classnames'

const SearchSections = memo((props) => {
    const { searchInfos } = props
    return (
        <SearchSectionWrapper>
            {
                searchInfos && searchInfos?.map((item, index) => {
                    return (
                        <div className={classNames("item", {last: index === searchInfos.length - 1})} key={index}>
                            <div className='title'>{item.title}</div>
                            <div className="desc">{item.desc}</div>
                        </div>
                    )
                })
            }
        </SearchSectionWrapper>
    )
})
SearchSections.propTypes = {}

export default SearchSections