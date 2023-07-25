import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { LongForWrapper } from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view';
import LongForItem from '@/components/longfor-item';

const HomeLongFor = memo((props) => {
    const { data } = props
    return (
        <LongForWrapper>
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
        </LongForWrapper>
    )
})

HomeLongFor.propTypes = {
    data: PropTypes.object
}

export default HomeLongFor