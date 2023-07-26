import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footerData from "@/assets/data/footer.json"

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className='wrapper'>
        <div className='service'>
          {
            footerData.map((item, index) => {
              return (
                <div className='item' key={item.name + index}>
                  <div className='name'>{item.name}</div>
                  <div className='list'>
                    {
                      item.list.map((item, index) => {
                        return <div className='iten' key={item + index}>{item}</div>
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='statement'>© 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301</div>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter