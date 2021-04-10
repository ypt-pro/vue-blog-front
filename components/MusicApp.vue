<template>
        <div>

          <div class="music">
            <aplayer
              v-if="flag"
              :music="audio[0]"
               fixed
               :list="audio" autoplay >
            </aplayer>
          </div>
        </div>
</template>

<script>
    import Aplayer from 'vue-aplayer'
    export default {
        name: "MusicApp",
        components: {
            'aplayer': Aplayer
        },
        data () {
            return {
                flag: false,
                audio :[],
                currentTime:'', //当前播放点
                duration:'',  //总时长点
                currentSrc:''


            }
        },
        created(){
          this.getMusicList()

        },
        mounted() {
            this.flag = true
        },
        methods:{
            getMusicList(){

                this.audio = this.$store.state.user.music
            }


        }
    }
</script>

<style>
.music{
  z-index: 5000!important;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  opacity: 0.5 !important;
}

</style>
