import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SectionFooterWrapper } from './style'
import IconMoreArrow from 'assets/svg/icon-more-arrow'
import theme from '@/assets/theme'

const SectionFooter = memo((props) => {
    const { name } = props

    let messageMore = '显示更多'
    if (name) {
        messageMore = `显示更多${name}房源`
    }
    return (
        <SectionFooterWrapper color={name ? theme.color.secondaryColor : '#000'}>
            <div className="moreInfo">
                <span>{messageMore}</span>
                <IconMoreArrow />
            </div>
        </SectionFooterWrapper>
    )
})

SectionFooter.propTypes = {}

export default SectionFooter