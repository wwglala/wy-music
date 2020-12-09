import React, { memo } from 'react'
import { Spin } from 'antd';

export default memo(function Loading() {
  return (
    <div>
      <Spin />
    </div>
  )
})
