import PropTypes from 'prop-types'
import React, { memo } from 'react'

import SectionHeader from '@/components/section-header'
import { HomeSectionWrapperV3 } from './style'
import RoomItem from '@/components/room-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeSectionV3 = memo((props) => {
    const { data } = props
    return (
        <HomeSectionWrapperV3>
            <SectionHeader title={data.title} subTitle={data.subtitle} />
            <div className="room-list">
                <ScrollView>
                    {
                        data?.list?.map((item, index) => {
                            return <RoomItem key={index} itemData={item} itemwidth='25%'></RoomItem>
                        })
                    }
                </ScrollView>
            </div>
        </HomeSectionWrapperV3>
    )
})

HomeSectionV3.propTypes = {}

export default HomeSectionV3