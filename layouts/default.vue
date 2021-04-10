<template>

  <div>


    <!--默认导航-->
    <nav   class="navbar navbar-expand-lg navbar-light nav-color-nav  navbar-lk text-dark">
      <div class="container">
        <a class="navbar-brand xiyuan" href="#"><img src="../assets/images/logo2.png" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nabmune" aria-controls="nabmune" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="nabmune">
          <ul class="navbar-nav nav-color ">
            <li class="nav-item active ">
              <a class="nav-link" @click="goPage('/')">首页 <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" @click="goPage('/picture')">全部</a>
            </li>

            <li class="nav-item dropdown ">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                工作
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a :key="item.id" v-for="item in work" class="dropdown-item" @click="goPage('/category')">{{item.sortName}}</a>

              </div>
            </li>
            <li class="nav-item ">
              <a class="nav-link" @click="goPage('/musics/01.discovery')">音乐</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link"  @click="goPage('/life')">生活</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" @click="goPage('/write')">写文章</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" @click="goPage('/about')">关于</a>
            </li>


          </ul>
          <!--<form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>-->
        </div>
      </div>
    </nav>


    <!--------------------------导航结束--------------------------------->


    <nuxt/>









    <div class="music">
      <audio :src="musicUrl" autoplay controls id="music"></audio>
    </div>


  </div>

</template>
<script>
    import '~/assets/css/animate.css'
    import '~/assets/css/font-icon.css'
    import '~/assets/css/main.css'


    import blog from "../api/blog/blog";
    export default {

        data(){
            return{
                work:[],
                musicUrl: ''
            }
        },
        created() {
            this.getList()
            this.getAllSubject()
        },
        watch:{

        },
        methods:{
            getUrl(url){
                alert(url)
                console.log("url:"+url)
            },

            getAllSubject(){
             blog.getWork()
                  .then(response=>{
                      this.work = response.data.data.work
                  })
            },
            getList(){


            },
            goPage(url) {
                this.$router.replace(url);
            }
        },
        mounted() {
            //订阅消息
            this.$pubSub.subscribe('pauseAudio', msg => {
                var audio = document.getElementById('music')
                audio.pause()
            })
        }

    }
</script>
<style>




  .music{
    background: #f1f3f4;
    z-index: 5000!important;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    opacity: 0.5 !important;
  }
  .music audio {
    width: 100%;
    border-radius: none;
    outline: none;
  }
a{
  cursor: pointer;
}
</style>

