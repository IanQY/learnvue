<template>
  <div @click="divClick">
    Home 组件: {{name}} - {{age}}
  </div>
</template>
<script>
export default {
  name: 'home',
  props: {
    name: {
      type: String,
      default: ""
    },
    age: {
      type: Number,
      default: ""
    }
  },
  emits: ["pageClick"],
  methods: {
    divClick() {
      this.$emit("pageClick")
    }
  }
}
</script>
<style scoped>
  
</style>