<template>
	<div >
		<el-carousel :interval="4000" type="card" height="200px">
    		<el-carousel-item v-for="item in 4" :key="item">
      			<h3>{{ item }}</h3>
    		</el-carousel-item>
  		</el-carousel>
		<!-- <h3>我是推荐</h3> -->
		<div class="news" v-for="item in actNews">
			<router-link class="title"  to="">{{item.title}}
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
		data(){
			return {
				actNews:[],
				keyWord:''
			}
		},
		methods : {

		},
		created(){
		    this.$http.get('/api',{
		      params : {
		      	host : 'http://api.avatardata.cn/ActNews/Query',
		      	qs : {
		      		key : '494a6a41b42a45e7bb8c06c85c3ad16d',
		        	keyWord : '习近平'
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
</script>
<style>
	.news{
		margin-top:1.25rem;
		width:100%;
		overflow: hidden;
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
		margin-top:0.625rem;
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
	.el-carousel__item h3 {
    color: #20a0ff;
    font-size: 0.875rem;
    opacity: 0.75;
    line-height: 12.5rem;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background:url(./img/2.jpg);
  }

  .el-carousel__item:nth-child(2n+1) {
     background:url(./img/3.jpg);
  }
  .el-carousel__item:nth-child(3) {
     background:url(./img/4.jpg);
  }
   .el-carousel__item:nth-child(4) {
     background:url(./img/5.jpg);
  }


</style>