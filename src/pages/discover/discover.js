import React, { memo, useEffect, useCallback, useRef, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import {
  get_banner,
  get_hot_recom
} from '@/store/action'

import { Carousel } from 'antd';
import { WrapperDiv } from './discoverStyle'

import Programmer from '@c/programmer'
import Wwgblock from '@c/wwgblock'

const contentStyle = {
  height: '285px',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};





export default memo(function Discover() {

  const dispatch = useDispatch()
  const banners = useSelector(state => state.reducer.get('banners'), shallowEqual);
  const recom = useSelector(state => state.reducer.get('recom'), shallowEqual);


  useEffect(() => {
    dispatch(get_banner())
    dispatch(get_hot_recom())
  }, [dispatch])

  const [count, setCount] = useState(0)
  const carousel = useRef()
  const bannerClick = useCallback(function (type) {
    switch (type) {
      case 'left':
        carousel.current.prev()
        break;
      case 'right':
        carousel.current.next()
        break;
      default:
        break;
    }
  }, [])

  const afterChange = useCallback(current => {
    setCount(() => current)
  }, [])

  let bgc = ['orange', 'pink', 'purple', 'green', 'yellow', 'red', 'black', 'orange', 'pink', 'purple',]
  return (
    <div>
      <div style={{ background: bgc[count] }}>
        <WrapperDiv>
          <button className='left' onClick={e => bannerClick('left')}>&lt;</button>
          <Carousel beforeChange={afterChange} ref={carousel} effect="fade" style={{ height: 285 }} autoplay >
            {
              banners && banners.map(item => {
                return (
                  <div key={item.targetId} >
                    <h1 style={contentStyle}>{item.targetId}---{item.typeTitle}</h1>
                  </div>
                )
              })
            }
          </Carousel>
          <button className='right' onClick={e => bannerClick('right')}>&gt;</button>
        </WrapperDiv>
      </div>
      <div style={{ width: 980, margin: '0 auto', padding: '0 10px', border: '1px solid gray' }}>
        <Programmer title='热门推荐' keywords={["华语", "流行", "摇滚", "民谣", "电子"]} more={true} />
        <div style={{ width: '100%' }}>
          {
            recom && recom.map(item => {
              return <Wwgblock key={item.id} item={item} />
            })
          }
          <div style={{ height: '320px' }}></div>
        </div>
      </div>


    </div >
  )
})
