import request from '@/utils/request'

export default {
//获取最首页所有信息
  index() {
    return request({
      url: '/article/blogstore/index',
      method: 'get'
    })
  }

}
