import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { HomeSectionWrapper } from './style'
import SectionHeader from 'components/section-header'
import SectionRooms from 'components/section-rooms'
import SectionFooter from '@/components/section-footer' 

const HomeSectionV1 = memo((props) => {
    const { data } = props
  return (
    <HomeSectionWrapper>
        <SectionHeader title={data.title} subTitle={data?.subtitle} />
        <SectionRooms list={data.list} itemwidth='25%' />
        <SectionFooter />
    </HomeSectionWrapper>
  )
})

HomeSectionV1.propTypes = {
    data: PropTypes.object
}

export default HomeSectionV1