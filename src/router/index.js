import { lazy } from 'react';
import { Redirect } from 'react-router-dom'


const Discover = lazy(() => import('@/pages/discover/index'))
const Cover = lazy(() => import('@/pages/discover/discover'))
const Toplist = lazy(() => import('@/pages/discover/toplist'))
const Playlist = lazy(() => import('@/pages/discover/playlist'))
const Djradio = lazy(() => import('@/pages/discover/djradio'))
const My = lazy(() => import('@/pages/my'))
const Friend = lazy(() => import('@/pages/friend'))
const Product = lazy(() => import('@/pages/product'))

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to='/discover' />
    )
  },
  {
    path: "/discover",
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        component: Cover
      },
      {
        path: '/discover/toplist',
        component: Toplist
      },
      {
        path: '/discover/playlist',
        component: Playlist
      },
      {
        path: '/discover/djradio',
        component: Djradio
      },

    ]
  },
  {
    path: "/my",
    component: My,
    exact: true,
  },
  {
    path: "/friend",
    component: Friend,
    exact: true,
  }, {
    path: "/product",
    component: Product,
    exact: true,
  }


]

export default routes;