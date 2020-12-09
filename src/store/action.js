import {
  GET_BANNER,
  GET_HOT_RECOM
} from './constants';
import {
  getBanner,
  getHotRecommend
} from '@/services'


export const get_banner = () => dispatch => {
  getBanner().then(res => {
    dispatch({
      type: GET_BANNER,
      banners: res.banners
    })
  })
}

export const get_hot_recom = () => dispatch => {
  getHotRecommend().then(res => {
    dispatch({
      type: GET_HOT_RECOM,
      recom: res.result.splice(0, 10)
    })
  })
}