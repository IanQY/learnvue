<template>
  <div>
    App组件
    <Home/>
    <AsyncCategory/>
  </div>
</template>
<script>
  import { defineAsyncComponent } from 'vue'
  import Home from './Home.vue'
  const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory.vue"))
  // import AsyncCategory from './AsyncCategory.vue'
export default {
  components: {
    Home,
    AsyncCategory
  }
}
</script>
<style scoped>
  
</style>