// 组合继承
// function SuperType(name) {  
//   this.name = name;  
//   this.colors = ["red","green","black"];  
// };  

// SuperType.prototype.sayName = function() {return this.name};  

// function SubType(name, age) {  
//   SuperType.call(this, name);  
//   this.age = age;  
// };  

// SubType.prototype = new SuperType(null);  
// SubType.prototype.sayAge = function () {return this.age};  

// var sub = new SubType("oyxb", 25);  
// sub.colors.push("grey");  
// console.log(sub.colors);  
// delete sub.colors;  
// console.log(sub.colors);  
// delete SubType.prototype.colors;  
// console.log(sub.colors);  
// console.log(sub.sayName());  
// console.log(sub.sayAge());  
// delete sub.name;  
// console.log(sub.sayName());  
// delete sub.age;  
// console.log(sub.sayAge()); 
/* 使用call将内部属性继承，使用prototype继承对象原型链属性／方法，组合 */


// 寄生组合
function object(o){
  function f(){};
  f.prototype = o;
  return new f();
}

function inheritPrototype(Sub,Super){
  var  prototype = object(Super.prototype);
  // prototype.constructor = Sub;
  Sub.prototype = prototype;
  Sub.prototype.constructor = Sub;
}

function Super(name){
  this.name = name;
}
Super.prototype.sayName = function () { console.log(this.name)};

function Sub(name, age){
  Super.call(this, name);

  this.age = age;
  if(typeof Super.prototype.sayAge != "function") {  
      Super.prototype.sayAge = function () { console.log(this.age)};  
  }; 
}

inheritPrototype(Sub, Super);

var sub = new Sub("bobo", 26);  
sub.sayAge();  
sub.sayName();  
console.log("typeof sub:" + typeof sub);  
delete sub.name;  
sub.sayName();//undifined  
sub.sayAge(); 


/*
   假如直接使用SubType.prototype = SuperType.prototype是可以实现原型链的直接继承，
   而不会产生组合继承的重复问题。
   但是会产生一个新的问题：就是prototype会指向同一个对象地址，也就是以后在SubType.prototype上修改
   会影响到SuperType.prototype 
   
   因此，寄生组合是使用原型链继承的最优雅方式
*/