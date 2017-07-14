<template>
	<div>
		<h3 id="tian">天气预报</h3>

		<el-row :gutter="20">
  			<el-col :span="12" :offset="6"><div class="grid-content bg-purple">
  				<input type="text" class="soutian" v-model="cityname" placeholder="请输入要查询天气的城市" @change="getWeather"></div></el-col>
		</el-row>

		<div v-for="item in w" class="dayweather">
			<h4>{{item.date}} {{item.nongli}} 星期{{item.week}}</h4>

			<div class="">
				<h3 class="day">白天</h3>
				<p>{{item.info.day[1]}} {{item.info.day[3]}} {{item.info.day[4]}}</p>
				<p v-if="item.info.night[6]">友情提示：{{item.info.day[6]}}</p>
				<h3 class="night">夜间</h3>
				<p>{{item.info.night[1]}} {{item.info.night[3]}} {{item.info.night[4]}}</p>
				<p v-if="item.info.night[6]">友情提示：{{item.info.night[6]}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				// w 表示天气
				w : [],
				cityname : ''
			}
		},
		methods : {
			getWeather(){
				// 调用函数
				if(!this.cityname){
					this.cityname = '北京'
				}

				// 请求天气
				this.$http.get('api',{
					params : {
						host : 'http://api.avatardata.cn/Weather/Query',
						qs :{
							key : 'e091dd4d37fd4e74879e258fe515e7f0',
							cityname : this.cityname
						},
						method : 'get'	
					}
				}).then(function(msg){
					// console.log(msg);
					this.w = msg.data.result.weather;

					// 清除当前天气的值
					// this.cityname = ''
				}.bind(this)).catch(function(err){
					// console.log(err);
					if(err){
						alert('别闹');
					}
				})
			}
		},
		created(){
			// 获取天气
			this.getWeather()
		}
	}
</script>

<style>
.dayweather{
	border-bottom:1px dashed #ccc
}
.day~p,.night~p{
	text-indent :2em;
}
#tian{
	margin-left:36%;
	display:block;
}

</style>
