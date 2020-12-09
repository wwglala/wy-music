import request from '../plugn/request';

export const getBanner = function () {
  return request({
    url: "banner"
  })
}

export function getHotRecommend() {
  return request({
    url: "/personalized"
  })
}