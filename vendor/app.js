/**
 * webpack 支持 ES6、CommonJs 和 AMD 规范
 */

// 全局引入
// import '@babel/polyfill'; // 全局引入会导入不需要的polyfill,导致打包体积变大

// ES6
import sum from './sum';
console.log('sum(1, 2) = ', sum(1, 2));


// CommonJS
var minus = require('./minus');
console.log('minus(1, 2) = ', minus(1, 2));

// AMD
// require(['./multi'], function (multi) {
//   console.log('multi(1, 2) = ', multi(1, 2));
// });

// 测试 ES6 语法是否通过 babel 转译
const array = [1, 2, 3];
const isES6 = () => console.log(...array);

isES6();

const arr = [new Promise(() => {}), new Promise(() => {})];
arr.map(item => {
  console.log(item);
});
