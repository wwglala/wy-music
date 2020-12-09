import React, { memo, useState } from 'react';
import { Nav } from './indexStyle'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';

const route = [
  {
    title: "推荐",
    path: '/discover'
  },
  {
    title: "排行榜",
    path: '/discover/toplist'
  },
  {
    title: "歌单",
    path: '/discover/playlist'
  },
  {
    title: "主播电梯",
    path: '/discover/djradio'
  }
]

export default memo(function Discover(props) {
  const [count, setCount] = useState(0);
  function itemClick(index) {
    setCount(index)
  }

  return (
    <div>
      <Nav>
        <ul>
          {
            route.map((item, index) => {
              return (
                <li key={item.path} onClick={e => itemClick(index)} className={(index === count ? 'active' : '')}>
                  <Link to={item.path}>
                    {item.title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </Nav>
      {
        renderRoutes(props.route.routes)
      }
    </div>
  )
})
