// Commonjs的模块化
let {add,mul} = require('./js/mathUtils.js')


console.log(add(1,2));
console.log(mul(5,2));

// Es6的模块化
import {name,age,height} from './js/info'
console.log(`myname is ${name},I'm ${age}and ${height} tall`);

// 依赖css文件

require('./css/normal.css')
require('./css/special.scss')

import Vue from 'vue'
// 使用vue进行开发
// import App from './vue/app'
import App from './vue/App.vue'


new Vue({
  el:'#app',
  template:'<App/>',
  components:{
    App
  }
})