<template>
<div>

  <!--内容-->
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-8">
        <div class="container">
          <div class="row wow fadeInDown">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../assets/images/1.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/2.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/3.png" class="d-block w-100" alt="...">
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
















          <!---文章开始-->
          <div class="row mt-2 wow fadeInDown">
            <div class="col-md-12 bgc">
              <div class="new">
                <span><i class="el-certificate"></i></span>

                <span>最新文章</span>
                <small>New Article</small>
              </div>
            </div>
          </div>

          <div class="row mt-2 ">



            <ul class="list-unstyled art-list">
              <li :key="item.id" v-for="item in newArticle" class="media wow bounceInLeft ypt-content">
                <div class="art-img">
                  <img class="mr-3" src="../assets/images/8.jpg"  alt="Generic placeholder image">
                </div>
                <div class="media-body art-content">
                  <h5 class="mt-0 mb-1"><nuxt-link :to="{path:'article/'+item.id}">{{item.title}}</nuxt-link></h5>
                  <p class="ypt-p">{{item.content}}</p>
                  <ul>
                    <li><a title="惜缘2019-04-03发表"><i class="el-time"></i>{{item.gmtCreate}}</a></li>
                    <li class="d-none d-sm-none d-md-none d-lg-block"><a href="javaScript:;" title="作者： 惜缘"><i class="el-user"></i>{{user.name}}</a></li>
                    <li><a title="已有 2 个赞"><i class="el-heart"></i>2</a></li>
                    <li><a title="已有 1次浏览"><i class="el-eye-open"></i>1</a></li>
                    <li class="d-none d-sm-none d-md-none d-lg-block"><a href="./article.html" title="查看分类"><i class="el-th-list"></i>生活</a></li>
                  </ul>
                </div>
              </li>

            </ul>

          </div>

          <div class="row ">
            <div class="col-md-12 bgc">
              <div class="new">
                <span><i class="el-certificate"></i>推荐图文</span>
                <small>New Article</small>
              </div>
            </div>

            <div class="container mt-4">
              <div class="row">
                <div class="col-md-4 bgc mb-4 ">
                  <div class="card mb-4 box-shadow  mt-4">
                    <div class="showimg">
                      <img class="card-img-top"  style=" width: 100%; display: block;" src="../assets/images/7.jpg" data-holder-rendered="true">
                    </div>

                    <div class="card-body">
                      <a href="#">测试图文</a>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group showtitle">
                          <i class="el-time"></i>2019-04-03
                        </div>
                        <small class="text-muted"><i class="el-fire"></i>9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 bgc mb-4">
                  <div class="card mb-4 box-shadow mt-4">
                    <div class="showimg showtitle">
                      <img class="card-img-top"  style=" width: 100%; display: block;" src="../assets/images/9.jpg" data-holder-rendered="true">
                    </div>
                    <div class="card-body">
                      <a href="#">测试图文</a>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group showtitle">
                          <i class="el-time"></i>2019-04-03
                        </div>
                        <small class="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 bgc mb-4">
                  <div class="card  box-shadow mt-4">
                    <div class="showimg">
                      <img class="card-img-top"  style=" width: 100%; display: block;" src="../assets/images/9.jpg" data-holder-rendered="true">
                    </div>
                    <div class="card-body">
                      <a href="#">测试图文</a>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group showtitle">
                          <i class="el-time"></i>2019-04-03
                        </div>
                        <small class="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>


          </div>


        </div>
      </div>

      <!--右边-->
      <div class="col-md-4 ">
        <div class="container">


          <div class="row bgc mt-5 right-author">
            <div class="col-md-12 ">
              <div class="auth-img">
                <img :src="user.avatar"  alt="">
              </div>
              <div class="auth-name">
                <span>{{user.name}}</span>
                <p>{{user.introduction}}</p>
              </div>
              <div class="auth-info">
                <ul>
                  <li><strong>2</strong><span>今日访问量</span></li>
                  <li><strong>2</strong><span>今日访问量</span></li>
                  <li><strong>2</strong><span>今日访问量</span></li>
                </ul>
              </div>

            </div>
          </div>


          <div class="row bgc mt-4">
            <div class="new new-right">
              <span><i class="el-arrow-up"></i></span>
              <span>网站公告</span>
              <small>New Article</small>
            </div>
            <div class="col-md-12 ">
              <div class="notice">
                <ul>
                  <li><a href="">Thinkphp5模型添加数据方法</a></li>
                  <li><a href="">Thinkphp5模型添加数据方法</a></li>
                  <li><a href="">Thinkphp5模型添加数据方法</a></li>
                  <li><a href="">Thinkphp5模型添加数据方法</a></li>

                </ul>
              </div>

            </div>
          </div>


          <div class="row bgc mt-3">
            <!--<form>-->
            <div class="search">

              <input type="text" class="search-input" placeholder="First name">

              <input class="search-submit" value=" " type="submit">
              <i class="el-search"></i>
            </div>

            <!--</form>-->
          </div>


          <div class="row bgc mt-3">
            <div class="new new-right">
              <span><i class="el-headphones"></i>说说</span>
              <small>New Article</small>
            </div>
            <div class="col-md-12 ">
              <div class="tab-pane"  role="tabpanel" aria-labelledby="nav-profile-tab">
                <ul class="art-sort">
                  <li>
                    <span>1</span>
                    <a href="#">thinkphp5随机抽取数据的方法
                      <b>(235)</b>
                    </a>
                  </li>
                  <li>
                    <span>2</span>
                    <a href="#">thinkphp5随机抽取数据的方法
                      <b>(235)</b>
                    </a>
                  </li>
                  <li>
                    <span>3</span>
                    <a href="#">thinkphp5随机抽取数据的方法
                      <b>(235)</b>
                    </a>
                  </li>
                  <li>
                    <span>4</span>
                    <a href="#">thinkphp5随机抽取数据的方法
                      <b>(235)</b>
                    </a>
                  </li>
                  <li>
                    <span>5</span>
                    <a href="#">thinkphp5随机抽取数据的方法
                      <b>(235)</b>
                    </a>
                  </li>
                </ul>
              </div>


            </div>
          </div>


          <div class="row bgc mt-4">
            <div class="new new-right">

              <span><i class="el-asl"></i>推荐图文</span>
              <small>New Article</small>
            </div>
            <ul class="list-unstyled artimg-list">
              <li class="media">
                <div class="artimg-img">
                  <img class="mr-3" src="../assets/images/7.jpg"  alt="Generic placeholder image">
                </div>
                <div class="media-body art-content">
                  <h5 class="mt-0 mb-1">js前端实现模糊查询</h5>
                  <p>js前端实现模糊查询对于模糊查询，一般都是传关键字给后端</p>
                  <ul>
                    <li><a title="惜缘2019-04-03发表"><i class="el-time"></i>2019-04-03</a></li>
                    <li class="d-none d-sm-none d-md-none d-lg-block"><a href="/index/article/index/id/32.html" title="查看分类"><i class="el-fire"></i>5</a></li>
                  </ul>
                </div>
              </li>
              <li class="media">
                <div class="artimg-img">
                  <img class="mr-3" src="images/8.jpg"  alt="Generic placeholder image">
                </div>
                <div class="media-body art-content">
                  <h5 class="mt-0 mb-1">js前端实现模糊查询</h5>
                  <p>js前端实现模糊查询对于模糊查询，一般都是传关键字给后端</p>
                  <ul>
                    <li><a title="惜缘2019-04-03发表"><i class="el-time"></i>2019-04-03</a></li>
                    <li class="d-none d-sm-none d-md-none d-lg-block"><a href="/index/article/index/id/32.html" title="查看分类"><i class="el-fire"></i>5</a></li>
                  </ul>
                </div>
              </li>
              <li class="media">
                <div class="artimg-img">
                  <img class="mr-3" src="images/9.jpg"  alt="Generic placeholder image">
                </div>
                <div class="media-body art-content">
                  <h5 class="mt-0 mb-1">js前端实现模糊查询</h5>
                  <p>js前端实现模糊查询对于模糊查询，一般都是传关键字给后端</p>
                  <ul>
                    <li><a title="惜缘2019-04-03发表"><i class="el-time"></i>2019-04-03</a></li>
                    <li class="d-none d-sm-none d-md-none d-lg-block"><a href="/index/article/index/id/32.html" title="查看分类"><i class="el-fire"></i>5</a></li>
                  </ul>
                </div>
              </li>

            </ul>

          </div>


          <div class="row bgc mt-5">

            <div class="nav nav-tabs tab-atr" id="box" role="tablist">
              <a class="nav-item  active actives" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">文章互动</a>
              <a class="nav-item " id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">文章排行</a>
            </div>

            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <ul class="hd-ul">
                  <li>
                    <div class="art-hd-list-left">
                      <a href="#"><img src="images/logo.png"  alt=""></a>
                    </div>
                    <div class="art-hd-list-right">
                      <span><i class="el-user"></i>惜缘</span>
                      <time>2020-3-7</time>
                      <p>一般都是传关键字给后端，由后端来做...</p>
                    </div>
                  </li>
                  <li>
                    <div class="art-hd-list-left">
                      <a href="#"><img src="images/logo.png"  alt=""></a>
                    </div>
                    <div class="art-hd-list-right">
                      <span><i class="el-user"></i>惜缘</span>
                      <time>2020-3-7</time>
                      <p>一般都是传关键字给后端，由后端来做...</p>
                    </div>
                  </li>
                  <li>
                    <div class="art-hd-list-left">
                      <a href="#"><img src="images/logo.png"  alt=""></a>
                    </div>
                    <div class="art-hd-list-right">
                      <span><i class="el-user"></i>惜缘</span>
                      <time>2020-3-7</time>
                      <p>一般都是传关键字给后端，由后端来做...</p>
                    </div>
                  </li>
                  <li>
                    <div class="art-hd-list-left">
                      <a href="#"><img src="images/logo.png"  alt=""></a>
                    </div>
                    <div class="art-hd-list-right">
                      <span><i class="el-user"></i>惜缘</span>
                      <time>2020-3-7</time>
                      <p>一般都是传关键字给后端，由后端来做...</p>
                    </div>
                  </li>
                  <li>
                    <div class="art-hd-list-left">
                      <a href="#"><img src="images/logo.png"  alt=""></a>
                    </div>
                    <div class="art-hd-list-right">
                      <span><i class="el-user"></i>惜缘</span>
                      <time>2020-3-7</time>
                      <p>一般都是传关键字给后端，由后端来做...</p>
                    </div>
                  </li>

                </ul>
              </div>
              <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <ul class="art-sort">
                  <li>
                    <span>1</span>
                    <a href="#">thinkphp5随机抽取数据的方法
                      <b>(235)</b>
                    </a>
                  </li>
                  <li>
                    <span>2</span>
                    <a href="#">thinkphp5随机抽取数据的方法
                      <b>(235)</b>
                    </a>
                  </li>
                  <li>
                    <span>3</span>
                    <a href="#">thinkphp5随机抽取数据的方法
                      <b>(235)</b>
                    </a>
                  </li>
                  <li>
                    <span>4</span>
                    <a href="#">thinkphp5随机抽取数据的方法
                      <b>(235)</b>
                    </a>
                  </li>
                  <li>
                    <span>5</span>
                    <a href="#">thinkphp5随机抽取数据的方法
                      <b>(235)</b>
                    </a>
                  </li>
                </ul>
              </div>

            </div>


          </div>


          <div class="row bgc mt-5">
            <div class="new new-right">
              <span><i class="el-tags"></i>标签云</span>
              <small>New Article</small>
            </div>
            <div class="col-md-12 ">
              <ul class="label">
                <li>
                  <a href="#" title="生活">生活&nbsp;&nbsp;(1)</a>

                </li>

                <li>
                  <a href="#" title="模糊查询">模糊查询&nbsp;&nbsp;(1)</a>

                </li>

                <li>
                  <a href="#" title="遍历二维数组">遍历二维数组&nbsp;&nbsp;(1)</a>

                </li>

                <li>
                  <a href="#" title="Mui">Mui&nbsp;&nbsp;(2)</a>

                </li>

                <li>
                  <a href="#" title="随机">随机&nbsp;&nbsp;(1)</a>

                </li>

                <li>
                  <a href="#" title="文章月统计">文章月统计&nbsp;&nbsp;(1)</a>

                </li>

                <li>
                  <a href="#" title="时间戳">时间戳&nbsp;&nbsp;(1)</a>

                </li>

                <li>
                  <a href="#" title="一周每天的数据">一周每天的数据&nbsp;&nbsp;(1)</a>

                </li>

                <li>
                  <a href="#" title="无限极分类">无限极分类&nbsp;&nbsp;(1)</a>

                </li>

                <li>
                  <a href="#" title="tp5">tp5&nbsp;&nbsp;(2)</a>

                </li>

                <li>
                  <a href="#" title="面试">面试&nbsp;&nbsp;(1)</a>

                </li>

                <li>
                  <a href="#" title="layui">layui&nbsp;&nbsp;(1)</a>

                </li>

                <li>
                  <a href="#" title="Thinkphp5">Thinkphp5&nbsp;&nbsp;(1)</a>

                </li>

                <li>
                  <a href="#" title="QQ互联">QQ互联&nbsp;&nbsp;(1)</a>

                </li>

                <li>
                  <a href="#" title="惜缘">惜缘&nbsp;&nbsp;(1)</a>

                </li>

                <li>
                  <a href="#" title="发斯蒂芬">发斯蒂芬&nbsp;&nbsp;(1)</a>

                </li>

                <li>
                  <a href="#" title="擦擦">擦擦&nbsp;&nbsp;(3)</a>

                </li>

                <li>
                  <a href="#" title="发">发&nbsp;&nbsp;(2)</a>

                </li>

                <li>
                  <a href="#" title="测试">测试&nbsp;&nbsp;(5)</a>

                </li>

                <li>
                  <a href="#" title="fasdfasd">fasdfasd&nbsp;&nbsp;(1)</a>

                </li>

                <li>
                  <a href="#" title="测试数据2">测试数据2&nbsp;&nbsp;(1)</a>

                </li>

                <li>
                  <a href="#" title="测试数据">测试数据&nbsp;&nbsp;(2)</a>

                </li>

              </ul>
            </div>
          </div>

          <div class="row bgc mt-5">
            <div class="new new-right">
              <span><i class="el-paper-clip"></i>友情连接</span>
              <small>Friend Links</small>
            </div>
            <div class="col-md-12 ">
              <ul class="links">
                <li><a href="">百度一下</a></li>
                <li><a href="">惜缘个人博客</a></li>
                <li><a href="">百度一下</a></li>
                <li><a href="">百度一下</a></li>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

</div>


</template>

<script>
    import blog from '@/api/blog/blog'
    import index from '@/api/blog/index'
export default {

        data(){
            return{
                user:{},
                newArticle:[]
            }
        },
        created() {
            this.getMyInfo()
            this.getAll()
        },
        methods:{
            getMyInfo(){
                blog.getMyInfo()
                    .then(response=>{
                        this.user = response.data.data.user
                    })
            },
            //获取最新文章---
            getAll(){
                index.index()
                    .then(response=>{
                        this.newArticle = response.data.data.blogs
                    })
            }
        }

}
</script>

<style scoped>
.ypt-content{
  overflow: hidden;
  width: 730px;
  text-overflow:ellipsis;
}
  .ypt-p{
    width: 500px;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>

