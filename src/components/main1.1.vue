<template>
  <div class="menu">
		 <div class="layout">
		 	<Layout>
		 		<Header>
		 			<Menu mode="horizontal" theme="dark" :active-name='activeName1'  @on-select="changeMenu1">
		 				<div class="layout-logo"></div>
		 				<div class="layout-nav">
		 					<MenuItem :name="item.name" v-for='item in oneNav'>{{item.name}}</MenuItem>
		 				</div>
		 			</Menu>
		 		</Header>
		 		<Layout>
					<!-- {{twoNav}} -->
		 			<Sider hide-trigger :style="{background: '#fff'}">
		 				<Menu  theme="light" width="auto" :active-name='activeName2' :open-names='[openNames2]'  @on-select="changeMenu">
		 					<Submenu :name='item.name' v-for='(item,index) in twoNav[0]' >
		 						<template slot="title">
		 							<Icon type="ios-navigate"></Icon>
		 							{{item.name}}
		 						</template>
		 						<MenuItem :name="item1.name" v-for='(item1,index) in item.children'>{{item1.name}}</MenuItem>
		 					</Submenu>
		 				</Menu>
		 			</Sider>
		 			<Layout :style="{padding: '0 24px 24px'}">
						<router-view>
							<router-view>
								<router-view></router-view>
							</router-view>
						</router-view>
		 			</Layout>
		 		</Layout>
		 	</Layout>
		 </div>
		
  </div>
</template>

<script>
export default {
  name: 'main1',
	data(){
		return {
			activeName1:'nav1',
			activeName2:"metering",
			openNames2:'deviceManage',
			twoNav:[],
			threeNav:[]
		}
	},
  	methods: {
			changeMenu1(routerName){//一级标题
				this.twoNav=[];
				console.log(routerName);
				var oneNav=this.oneNav;
				oneNav.forEach((item)=>{
					if(item.name==routerName){
						this.twoNav.push(item.children)
					}
				})
				console.log('twoNav',this.twoNav);
				this.threeNav=this.twoNav;
				this.$router.push({ name: routerName });
			},
  	changeMenu (routerName) {//三级
			console.log(routerName);
  	  this.$router.push({ name: routerName })
  	}
  },
	computed:{
		oneNav(){
			var oneNav=this.$router.options.routes[1].children;
			console.log('oneNav',oneNav);
			return oneNav
		},
	},
	created(){
		this.changeMenu1('nav1')
		// console.log('this.$router.routes',this.$router.options.routes);
		// this.twoNav;
	},
	mounted(){
	}
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.layout {
		height: 100vh-30px;
		border: 1px solid #d7dde4;
		background: #f5f7f9;
		position: relative;
		border-radius: 4px;
		overflow: hidden;
	}
	
	.layout-logo {
		width: 100px;
		height: 30px;
		background: #5b6270;
		border-radius: 3px;
		float: left;
		position: relative;
		top: 15px;
		left: 20px;
	}
	
	.layout-nav {
		width: 420px;
		margin: 0 auto;
		margin-right: 20px;
	}
</style>
