<template>
    <div>

      <div class="container">
        <div class="row mt-2">
          <div class="col-md-12 bgc">

            <div class="new">
              <span><i class="el-certificate"></i>推荐图文</span>
              <small>New Article</small>
            </div>
          </div>










          <el-form :inline="true" class="demo-form-inline myform">
            <el-form-item>
            <el-input v-model="BlogQuery.title" placeholder="模糊搜索文章"/>
            </el-form-item>
            <el-form-item label="">
              <el-select
                v-model="BlogQuery.subjectId"
                @change="subjectLevelOneChanged" placeholder="请选择"><!--如果想要获取option中的value,这个方法不能加(),因为vue已经封装过了，再加就错了-->
                <el-option
                  v-for="subject in subjectOneList"
                  :key="subject.id"
                  :label="subject.sortName"
                  :value="subject.id"/>
              </el-select>
              <!--二级联动-->
              <el-select
                v-model="BlogQuery.subjectParentid"
                placeholder="请选择">
                <el-option
                  v-for="subject in subjectTwoList"
                  :key="subject.id"
                  :label="subject.sortName"
                  :value="subject.id"/>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button @click="getListBlog()" type="info" plain>查询</el-button>
              <el-button type="default" @click="resetData()">清空</el-button>
            </el-form-item>
          </el-form>
          <!----------文章开始------------->
          <div class="col-md-12 mt-4 wow bounceInDown">
            <div class="row">

              <div v-for="item in BlogList" :key="item.id" class="col-md-3 col-sm-6 ">
                <div class="card  box-shadow mt-4">
                  <div class="showimg">
                    <img class="card-img-top"  style=" width: 100%; display: block;" src="../assets/images/13.jpg" data-holder-rendered="true">
                  </div>
                  <div class="card-body">
                    <nuxt-link :to="{path:'article/'+item.id}">{{item.title}}</nuxt-link>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group showtitle">
                        <i class="el-time"></i>{{item.gmtCreate}}
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
      <el-pagination
        :current-page="current"
        :page-size="limit"
        :total="total"
        style="padding: 30px 0; text-align: center;"
        layout="total, prev, pager, next, jumper"
        @current-change="getListBlog"
      />
    </div>
</template>

<script>
    import blog from '@/api/blog/blog'
    import subject from '@/api/subject/subject'
    export default {
        name: "picture",
        data(){
            return{
                BlogList:[],
                current:1,
                limit:8,
                total:0,
                BlogQuery:{
                    subjectParentid : ''
                },
                subjectOneList:[],
                subjectTwoList:[]

            }
        },
        created() {
            this.getListBlog()
            this.getOneSubject()
        },
        methods:{

            getListBlog(current=1){
                this.current = current
                blog.queryAllBlog(this.current,this.limit,this.BlogQuery)
                    .then(response=>{

                        this.total = response.data.data.total
                        this.BlogList = response.data.data.items
                        console.log("total:"+response.data.data.total)
                        console.log("itesm:"+response.data.data.items)
                    })
            },
            //查询博客分类
            getOneSubject(){
                subject.getAllSubjectList()
                    .then(response=>{

                        this.subjectOneList = response.data.data.list;
                    })
            },
            resetData(){
                this.BlogQuery = {};
                this.subjectTwoList = []
                this.getListBlog();
            },
            subjectLevelOneChanged(value){



                for(let i=0; i<this.subjectOneList.length;i++){

                    let oneSubject = this.subjectOneList[i];
                    if(value===oneSubject.id){

                        this.subjectTwoList = oneSubject.children;
                        this.BlogQuery.subjectParentid = ''

                    }

                }


            }

        }
    }
</script>

<style scoped>
.myform{
  margin-top: 10px;
}
</style>
