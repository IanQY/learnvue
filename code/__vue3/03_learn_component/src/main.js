import { createApp } from 'vue'
import App from './04生命周期/App'

// import {sum} from './异步组件/utils/math';

// console.log(sum(20, 30));

// 通过import函数导入的模块, 后续webpack对其进行打包的时候就会进行分包的操作
// import("./异步组件/utils/math").then((res) => {
//   console.log(res.sum(20, 30))
// })

createApp(App).mount('#app')
