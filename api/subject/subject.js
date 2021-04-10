import request from '@/utils/request'


export default{

  //博客分类
  getAllSubjectList(){

    return request({
      url: '/article/topsort/getAllSubject',
      method: 'get'
    })
  }

}
