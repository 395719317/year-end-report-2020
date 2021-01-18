import request from '@/common/js/request'
//得到token
export function getToken(data) {
    return request({
      url: '/oa/eva/gettoken',
      method: 'get',
      params:data
    })
  }