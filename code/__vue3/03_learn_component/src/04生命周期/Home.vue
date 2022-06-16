<template>
  <div>
    <h2>Home组件</h2>
    <p ref="title">{{ message }}</p>
    <button @click="changeMessage">修改message</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "HelloHome",
    };
  },
  methods: {
    changeMessage() {
      this.message = "你好Change";
    },
  },
  beforeCreate() {
    console.log("home beforeCreate");
  },
  created() {
    console.log("home created");
  },
  beforeMount() {
    console.log("home beforeMount");
  },
  mounted() {
    console.log("home mounted");
    console.log(this.$refs.title);
  },
  beforeUnmount() {
    console.log("home beforeUnmount");
  },
  unmounted() {
    console.log("home unmount");
  },
  beforeUpdate() {
    console.log("home beforeUpdate");
    console.log(this.$refs.title.innerHTML);
  },
  updated() {
    console.log("home update");
    console.log(this.$refs.title.innerHTML);
  },
};
</script>
<style scoped>
</style>