import request from '@/common/js/request'
//2020年度报告-个人报告查询接口
export function getReport(data) {
  return request({
    url: '/adm/usersummary2020/getInfoByOA',
    method: 'get',
    params: data
  })
}
