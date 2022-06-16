<template>
  <div>
    About 组件:
    <button @click="count++">{{count}}</button>
  </div>
</template>
<script>
export default {
  name: 'about',
  data() {
    return {
      count:0
    }
  },
}
</script>
<style scoped>
  
</style>