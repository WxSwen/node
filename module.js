// let MyModules = (function Manager(){
//   let modules = {};

//   function define(name, deps, impl){
//     for(let i = 0; i < deps.length;i++){
//       deps[i] = modules[deps[i]];
//     }
//     modules[name] = impl.apply(impl,deps);
//   }

//   function get(name) {
//     return modules[name]
//   }

//   return {
//     define: define,
//     get: get,
//   }
// })();

// let mymodules = {
//   //不把modules暴露出去，模块优点：只暴露出自己想暴露出的方法／属性，不把整个词法作用域暴露出去
//   modules: { 
//   },
//   define: function(name, deps, impl){
//     for(let i  = 0;i < deps.length;i++){
//       deps[i] = this.modules[deps[i]]
//     }
//     this.modules[name] = impl.apply(impl, deps);
//   },
//   get: function(name){
//     return this.modules[name];
//   }
// }
// mymodules.define('bar',[],function(){
//   function hello(who) {
//     return "let me introduce:" + who
//   }
//   return {
//     hello: hello
//   }
// })
// mymodules.define('foo',['bar'],function(bar){
//   var hungry = 'hippo';
//   function awesome(){
//     console.log(bar.hello(hungry));
//   }
//   return {
//     awesome: awesome
//   }
// });

// mymodules.get('foo');


var path  = require('path');
console.log(path.dirname);
console.log(path.basename);

