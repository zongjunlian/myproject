<template>
  <div class="home">
    home
  </div>
</template>

<script>
	import  alarm from '@/api/alarm'
export default {
  name: 'home',
  components: {
  },
  methods: {
  	aa(){
		alarm.searchCompanyByUser({
		})
		  .then((res) => {
				console.log(res);
		  })
		  .catch((err) => {
		    this.$Message.error('获取添加火警信息联网单位失败')
		  })
	}
  },
  created() {
	  this.aa();
  }
}
</script>
