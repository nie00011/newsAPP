<template>
	<div >
		
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
		        	keyWord : 'LPL'
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
		margin-top:20px;
		width:100%;
		overflow: hidden;
	}
 .title{
		margin-top:20px;
		color:#000;
		margin-left:10px;
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
		font-size:12px;
		margin-bottom:10px;
		margin-left:10%;

	}
	.news span{
		display:block;
		width:90%;
		border:1px solid #ccc;
		margin-left:5%;
	}
	.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
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