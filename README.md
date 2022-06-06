# learnvue

## 学习笔记

### 块级作用域

JavaScript 中只有函数作用域和全局作用域

ES6 加入 let 声明变量，用法和 var 类似，不过 let 所声明的变量，只在 let 命令所在的代码块有效果

### const 的使用

ES6 中优先使用 const，需要改变标识符的时候才使用 let

### 父子组件的通信

- 通过 props 向子组件传递数据
  1. 字符串数组
  2. 对象
- 通过事件向父组件发送消息

### 计算属性

- computed

### 事件监听

- @click

### 条件判断

- v-if/v-else-if/v-else

### 高阶函数

#### filter()/map()/reduce()

- filter()用法
  
  > https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

```javascript
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
```

- map()用法

```javascript
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array
}[, thisArg])
```

- reduce()用法
  
  > https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

```javascript
// 箭头函数
reduce((previousValue, currentValue) => {
  /* ... */
});
reduce((previousValue, currentValue, currentIndex) => {
  /* ... */
});
reduce((previousValue, currentValue, currentIndex, array) => {
  /* ... */
});
reduce((previousValue, currentValue, currentIndex, array) => {
  /* ... */
}, initialValue);

// 回调函数
reduce(callbackFn);
reduce(callbackFn, initialValue);

// 内联回调函数
reduce(function (previousValue, currentValue) {
  /* ... */
});
reduce(function (previousValue, currentValue, currentIndex) {
  /* ... */
});
reduce(function (previousValue, currentValue, currentIndex, array) {
  /* ... */
});
reduce(function (previousValue, currentValue, currentIndex, array) {
  /* ... */
}, initialValue);
```

### 插槽

### 具名插槽

```html
<button slot="center">案例</button>

<slot name="center"><span>中间</span></slot>
```
### 编译作用域


### 模块化

* CommonJs

    解构赋值
```javascript
//CommonJs
module.exports = {
    flag,
    sum
}
let {flag,sum} = require('./aaa.js')
```
* AMD
* CMD
* ES6的Moduels

```javascript
export {}
import {} from './aaa.js'
```

### webpack安装

* 全局安装webpack `npm install webpack@3.6.0 -g`
* 使用`webpack .\src\main.js .\dist\bundle.js`
* 本地安装webpack`npm install webpack@3.6.0 --save-dev`

### webpack的loader

* 查看依赖版本 package.json


 ```json
  "peerDependencies": {
      "webpack": "^3.0.0 || ^4.0.0"
    }
 ```



* style-loader css-loader

```json
module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  }
```



### webpack配置vue

1. runtime-only
2. runtime-compoiler
