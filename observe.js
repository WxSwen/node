
/**
 * observe data change
 */
class Observe{
  constructor(data){
    this.walk(data);
  }
  walk(data){
    Object.keys(data).map((keys)=>{
      defineReactive(data, keys, data[keys]);
    })
  }
}
function defineReactive(data, key, val){
  let dep = new Dep();

  //recursive children object
  observer(val);

  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get:()=>{
      dep.addSubs();
      return val;
    },
    set:(newVal)=>{
      if(newVal === val){
        return;
      }
      observer(newVal);
      dep.notify();
    }
  })
}
function observer(data){
  if(Object.prototype.toString.call(data) !== '[object Object]'){
    return;
  }
  new Observe(data);
}

/**
 * watch and get callback
 */
class Watch{
  constructor(exp,fn){
    this.exp = exp;
    this.fn = fn;
    pushTarget(this);
    data[exp];
  }
}

/**
 * add and notify
 */
class Dep{
  constructor(){
    this.subs = [];
  }
  addSubs(){
    this.subs.push(Dep.target);
  }
  notify(){
    this.subs.map((sub)=>{
      sub.fn();
    });
  }
}
Dep.target = null;
function pushTarget(watch){
  Dep.target = watch;
}

var data = {
  a: 1,
  b: {
      c: 2
  }
}
observer(data);
new Watch('a', () => {
    console.log(9)
})
new Watch('a', () => {
    console.log(90)
})
new Watch('b.c', () => {
    console.log(80)
})

setTimeout(()=>{
  data.a = 6;
},1000)