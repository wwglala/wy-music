import { Map } from 'immutable'
import {
  GET_BANNER,
  GET_HOT_RECOM
} from './constants'
const initState = Map({
  banners: [],
  recom: []
})

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_BANNER:
      return state.set('banners', action.banners);
    case GET_HOT_RECOM:
      return state.set('recom', action.recom)
    default:
      return state;
  }
}