<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      message:'Hello World',
      name:'Ian'
    }
  },
  methods:{
    btnClick(){
      console.log('aaaa');
    }
  }
}
</script>

<style scoped>
  .title{
    color: yellow;
  }
</style>