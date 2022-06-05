// Commonjs的模块化
let {add,mul} = require('./mathUtils.js')


console.log(add(1,2));
console.log(mul(5,2));

// Es6的模块化
import {name,age,height} from './info'
console.log(`myname is ${name},I'm ${age}and ${height} tall`);