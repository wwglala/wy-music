import React, { memo } from 'react'
import { WrapperDiv } from './style'

export default memo(function (props) {
  return (
    <WrapperDiv>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>{props.title}</h3>
        <div className='keywords'>
          {
            props.keywords && props.keywords.map((item, index) => {
              return (
                <div key={item}>
                  <span>{item}</span>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div>{props.more ? '更多' : ''}</div>
    </WrapperDiv>
  )
})
