import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames/bind'

import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'

const EntireFilter = memo((props) => {
    const [selectItems, setSelectItems] = useState([])

    function handleClick(item) {
        let newItems = [...selectItems]

        if (newItems.includes(item)) {
            newItems.splice(newItems.indexOf(item), 1)
        } else {
            newItems.push(item)
        }
        setSelectItems(newItems)
    }

    return (
        <FilterWrapper>
            <div className="filter">
                {
                    filterData.map((item, index) => {
                        return (
                            <div
                                className={classNames('item', { active: selectItems.includes(item) })}
                                key={item + index}
                                onClick={(e) => handleClick(item)}
                            >
                                {item}
                            </div>
                        )
                    })
                }
            </div>
        </FilterWrapper>
    )
})

EntireFilter.propTypes = {}

export default EntireFilter