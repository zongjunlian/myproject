<template>
  <div class="login">
    <span @click="login">登录</span>
  </div>
</template>

<script>
// @ is an alias to /src
import alarm from '../api/alarm.js'
export default {
  name: 'login',
  components: {
  },
  methods: {
  	login(){
			this.$router.push({name: 'collector'})
		}
  },
  created() {
  }
}
</script>
