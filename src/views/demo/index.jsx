import Indicator from '@/base-ui/indicator'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'

const Demo = memo(() => {
    const names = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'ooo', 'ggg', 'hhh']
    const [selectIndex, setSelectIndex] = useState(0)

    function handleToggle(num) {
        let newIndex = selectIndex + num
        if (newIndex < 0) newIndex = names.length - 1
        if (newIndex > names.length - 1) newIndex = 0
        setSelectIndex(newIndex)
    }
    return (
        <DemoWrapper>
            <div className='control'>
                <button onClick={e => handleToggle(-1)}>PREV</button>
                <button onClick={e => handleToggle(1)}>NEXT</button>
            </div>
            <div className="list">
                <Indicator selectIndex={selectIndex}>
                    {
                        names.map((item, index) => {
                            return (
                                <button key={index}>{item}</button>
                            )
                        })
                    }
                </Indicator>
            </div>
        </DemoWrapper>
    )
})

export default Demo