<template>
  <div>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="menu">
        <p class="">波波资讯ds</p>
        <router-link to="/search">
             <el-button  @click="search" type="text" icon="search">搜索</el-button>
        </router-link>
    </div>
    <div class="to_menu">
        <router-link class="font_menu" to="/tui">推荐</router-link>
        <router-link class="font_menu" to="/nong">农业</router-link>
        <router-link class="font_menu" to="/weather">天气</router-link>
        <router-link class="font_menu" to="/strong">健康</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      keyName : '',
      actNews : []
    }
  },
  methods : {
    search(){
        this.$http.get('/api',{
          params : {
            host : 'http://api.avatardata.cn/ActNews/Query',
            qs : {
               key : '494a6a41b42a45e7bb8c06c85c3ad16d',
              keyWord : this.keyName
            },
            method : 'get'
          }
        }).then(function(msg){
          console.log(msg);
          this.actNews = msg.data.result

        }.bind(this)).catch(function(err){
          console.log(err);
        })
    }
  }
}
</script>

<style>
.menu{
    width:100%;
    height:2.75rem;
    background:#D43D3D;
}
.menu>p{
    position:absolute;
    color:#fff;
    font-weight:700;
    line-height:2.75rem; 
    font-size:1.25rem; 
    left:50%;
    margin-left:-2.75rem;
}
.menu>input{
    float:left;
    width:10.375rem;
    height:1.625rem;
    margin-top:0.4375rem;
    margin-left:2.75rem;

    outline:none;
}
.menu .el-button--text{
    color:#fff;
    margin-top:0.3125rem;
    position:absolute;
    right:0.625rem;
}
.ps{
    float:left;
    margin-right:10px;
}
.el-input{
    width:12.5rem;
    float:left;
    margin-left:0.875rem;
    margin-top:0.4375rem;
}
.to_menu{
    width:100%;
    overflow: hidden;
    height:1.875rem;
    background:#F4F5F6;
    line-height:1.875rem;
    
}
.to_menu .font_menu:first-child {
    color:#505050;
    margin-left:0.625rem; 
}
.font_menu~.font_menu{
    margin-left:0.875rem;
}

</style>
