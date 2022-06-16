<template>
  <div>
    <h1 ref="title">123</h1>
    <button @click="btnClick">获取元素</button>
    <nav-bar ref="navBar"></nav-bar>
  </div>
</template>
<script>
import NavBar from './NavBar.vue'
export default {
  components: {
    NavBar
  },
  methods: {
    btnClick() {      
      console.log(this.$refs.title);
      console.log(this.$refs.navBar.message);
    }
  }
}
</script>
<style scoped>
  
</style>