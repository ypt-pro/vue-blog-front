import request from '@/utils/request'

export default{

  //博客分类
  addBlog(blogstore){

    return request({
      url: '/article/blogstore/addBlog',
      method: 'post',
      data:blogstore
    })
  },
  //获取工作下的分类
  getWork(){
    return request({
      url: '/article/topsort/getWork',
      method: 'get'
    })
  },

  //获取我的信息
  getMyInfo(){
    return request({
      url: '/ypt/user/getMyInfo',
      method: 'get'
    })
  },
  //根据文章id查询文章内容
  queryBlogById(id){
    return request({
      url: `/article/blogstore/queryBlogById/${id}`,
      method: 'get'
    })
  },

  //查询所有文章
  queryAllBlog(current,limit,allBlogVo){
    return request({
      url:`/article/blogstore/queryAllBlog/${current}/${limit}`,
      method:'post',
      data:allBlogVo
     })
  }



 }
