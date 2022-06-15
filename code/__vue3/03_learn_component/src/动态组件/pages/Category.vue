<template>
  <div>
    Category 组件:
    <button @click="count++">{{count}}</button>
  </div>
</template>
<script>
export default {
  name: 'category',
  data() {
    return {
      count:0
    }
  },
  
}
</script>
<style scoped>
  
</style>