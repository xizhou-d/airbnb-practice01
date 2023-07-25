import React, { memo } from 'react'

import { EntireWrapper } from './style'

const Entire = memo(() => {
  return (
    <EntireWrapper>
        <div className="filter">Filter.</div>
        <div className="rooms">Room.</div>
        <div className="pagination">Pagination</div>
    </EntireWrapper>
  )
})

export default Entire