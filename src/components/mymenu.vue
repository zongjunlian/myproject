<template>
  <div class="menu">
		 <div class="layout">
		 	<Layout>
		 		<Header>
		 			<Menu mode="horizontal" theme="dark" active-name="1" @on-select="changeMenu1">
		 				<div class="layout-logo"></div>
		 				<div class="layout-nav">
		 					<MenuItem name="home1">aa</MenuItem>
		 					<MenuItem name="about1">bb</MenuItem>
		 				</div>
		 			</Menu>
		 		</Header>
		 		<Layout>
		 			<Sider hide-trigger :style="{background: '#fff'}">
		 				<Menu active-name="1-2" theme="light" width="auto" :open-names="['1']"  @on-select="changeMenu">
		 					<Submenu name="1" v-for='(item,index) in 2' >
		 						<template slot="title">
		 							<Icon type="ios-navigate"></Icon>
		 							{{index+1}}
		 						</template>
		 						<MenuItem name="home">账户管理</MenuItem>
		 						<MenuItem name="about">账户信息查询</MenuItem>
		 					</Submenu>
		 				</Menu>
		 			</Sider>
		 			<Layout :style="{padding: '0 24px 24px'}">
		 				<router-view />
		 			</Layout>
		 		</Layout>
		 	</Layout>
		 </div>
		
  </div>
</template>

<script>
export default {
  name: 'mymenu',
  	methods: {
	changeMenu1(routerName){
		this.$router.push({ name: routerName })
	},
  	changeMenu (routerName) {
  	  this.$router.push({ name: routerName })
  	}
  },
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
