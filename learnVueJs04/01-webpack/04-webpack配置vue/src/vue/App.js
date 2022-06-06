export default {
  template:`
  <div>
    <h2>{{message}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
  `,
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