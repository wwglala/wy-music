import React, { memo, useState, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import { Header, Footer } from './AppStyle'
import routes from '@/router'

const headerRoute = [
  {
    path: '/',
    title: "发现音乐"
  },
  {
    path: '/my',
    title: "我的音乐"
  },
  {
    path: '/friend',
    title: "朋友"
  },
  {
    path: '/product',
    title: "商城"
  },

]

export default memo(function (props) {
  const [count, setCount] = useState(0)

  function navClick(index) {
    setCount(index)
  }

  return (
    <>
      <Header>
        <ul>
          <li className='logo'>logo</li>
          {
            headerRoute.map((item, index) => {
              return (
                <li key={item.path} >
                  <Link to={item.path} onClick={e => { navClick(index) }} className={(index === count ? 'act' : '')}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </Header>
      <div>
        <Suspense fallback={<div>123</div>}>
          {
            renderRoutes(routes)
          }
        </Suspense>
      </div>

      <Footer>
        footer
      </Footer>

    </>
  )
})


// export default memo(function App() {
//   return (
//     <Wrapper>
//       <Suspense fallback={<Loading></Loading>}>
//         {renderRoutes(routes)}
//       </Suspense>
//     </Wrapper>
//   )
// })
