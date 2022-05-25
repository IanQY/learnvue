# learnvue
## 学习笔记


### 块级作用域
JavaScript中只有函数作用域和全局作用域

ES6加入let声明变量，用法和var类似，不过let所声明的变量，只在let命令所在的代码块有效果

### const的使用

ES6中优先使用const，需要改变标识符的时候才使用let

### 父子组件的通信

* 通过props向子组件传递数据
    1. 字符串数组
    2. 对象
* 通过事件向父组件发送消息

### 计算属性
* computed

### 事件监听
* @click
### 条件判断
* v-if/v-else-if/v-else


## 高阶函数
### filter()/map()/reduce()

* filter()用法
> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

```javascript
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
```

* map()用法
```javascript
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array 
}[, thisArg])
```

* reduce()用法
> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
```javascript
// 箭头函数
reduce((previousValue, currentValue) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

// 回调函数
reduce(callbackFn)
reduce(callbackFn, initialValue)

// 内联回调函数
reduce(function(previousValue, currentValue) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)
```

