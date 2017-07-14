 <template>
 	<div class="search">
		<el-input v-model="keyName" size="small" placeholder="请输入关键字"></el-input>
		<el-button  @click="search" type="text" icon="search">搜索</el-button>

		<div class="news" v-for="item in actNews">
			<router-link class="title"  to="/tui/xiang">{{item.title}}
			</router-link>
			<img width="200" :src="item.img" alt="">
			<p>{{item.pdate_src}}</p>
			<span></span>
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
          // console.log(msg);
          this.actNews = msg.data.result

        }.bind(this)).catch(function(err){
          console.log(err);
        })
    }
  }
}
</script>
<style scoped>
.search input{
    float:left;
    height:30.5rem;
    margin-top:0.4375rem;
    margin-left:2.75rem;
    outline:none;
}
.search .el-button--text{
	margin-top:0.375rem;
	color:#97A8BE;
}
 .title{
		margin-top:1.25rem;
		color:#000;
		margin-left:0.625rem;
		display:block;
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	.news img{
		margin-top:10px;
		margin-left:10%;
	}
	.news p{
		font-size:0.75rem;
		margin-bottom:0.625rem;
		margin-left:10%;

	}
	.news span{
		display:block;
		width:90%;
		border:1px solid #ccc;
		margin-left:5%;
	}
</style>