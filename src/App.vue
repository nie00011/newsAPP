<template>
  <div id="app">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="menu">

        <p class="">
        	<el-row :gutter="20">
  				<el-col :span="12" :offset="6"><div class="grid-content bg-purple">波波资讯</div></el-col>
			</el-row>
		</p>
        <router-link to="/search">
             <el-button type="text" icon="search">搜索</el-button>
        </router-link>
    </div>
    <el-row>
	  <el-col :span="4"><div class="grid-content bg-purple"><router-link class="font_menu" to="/tui">推荐</router-link></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple-light"><router-link class="font_menu" to="/nong">篮球</router-link></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple"><router-link class="font_menu" to="/weather">天气</router-link></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple-light"><router-link class="font_menu" to="/strong">电竞</router-link></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple"><router-link class="font_menu" to="/zuqiu">足球</router-link></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple-light"><router-link class="font_menu" to="/dianjing">全运会</router-link></div></el-col>
</el-row>


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
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}

a {
  color: #1d8ce0;
  text-decoration:none 
}

.menu{
    width:100%;
    height:2.75rem;
    background:#20a0ff;
}
.menu>p{
    position:absolute;
    color:#fff;
    font-weight:700;
    line-height:2.75rem; 
    font-size:1.25rem; 
    left:37%;
    margin-left:-2.75rem;
    float:left;
    display:block;
    width:12.5rem;
}

.menu .el-button--text{
    color:#fff;
    margin-top:0.3125rem;
    position:absolute;
    right:0.625rem;
}
.ps{
    float:left;
    margin-right:0.625rem;
}
.el-input{
    width:12.5rem;
    float:left;
    margin-left:0.875rem;
    margin-top:0.4375rem;
}
.to_menu{
    width:100%;
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
    color:#505050;
}

</style>
