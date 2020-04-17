// import _ from 'lodash'
// console.log(_.join(['a', 'b', 'c']));
//
// function getComponent() {
//   // 使用 异步的形式导入 lodash，default: _ 表示用 _ 代指 lodash
//   return import('lodash').then(({ default: _ }) => {
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['hello', 'world'], '-');
//     return element;
//   })
// }
//
// getComponent().then(element => {
//   document.body.appendChild(element);
// });

import './css/base.css';
import './scss/main.scss';

document.addEventListener('click', () => {
  // webpackPrefetch: true 会等你主要的 JS 都加载完了之后，网络带宽空闲的时候，它就会预先帮你加载好
  import(/* webpackPrefetch: true */ './click.js').then(({ default: func }) => {
    func();
  })
});
