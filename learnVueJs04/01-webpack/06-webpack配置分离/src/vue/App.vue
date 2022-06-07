<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <Cpn/>
    <Cpn>123456</Cpn>
  </div>
</template>

<script>
import Cpn from './Cpn.vue'
export default {
  components:{
    Cpn
  },
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