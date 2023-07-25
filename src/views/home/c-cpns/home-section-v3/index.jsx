import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { HomeSectionWrapperV3 } from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view';
import LongForItem from '@/components/longfor-item';

const HomeSectionV3 = memo((props) => {
    const { data } = props
    return (
        <HomeSectionWrapperV3>
            <SectionHeader title={data?.title} subTitle={data.subtitle} />
            <div className='long-for'>
                <ScrollView>
                    {
                        data?.list?.map((item, index) => {
                            return (
                                <LongForItem item={item} key={index} />
                            )
                        })
                    }
                </ScrollView>
            </div>
        </HomeSectionWrapperV3>
    )
})

HomeSectionV3.propTypes = {
    data: PropTypes.object
}

export default HomeSectionV3