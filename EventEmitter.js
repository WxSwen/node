//event.js 文件

// var emitter = new events.EventEmitter(); 
// emitter.on('someEvent', function(arg1, arg2) { 
//     console.log('listener1', arg1, arg2); 
// }); 
// emitter.on('someEvent', function(arg1, arg2) { 
//     console.log('listener2', arg1, arg2); 
// }); 
// emitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 

// listener1 arg1 参数 arg2 参数
// listener2 arg1 参数 arg2 参数

class EventEmitter{
  constructor(){
    this.method = {};
  }

  on(key,func){
    this.method[key] = Array.isArray(this.method[key]) ? this.method[key] : [];
    typeof func === 'function' && this.method[key].push(func);
  }
  emit(key,...param){
    this.method[key].map((method,i) => method.call(null,...param));
  }
  off(key,func){
    let idx = this.method[key].indexOf(func),
        method = this.method[key];
    if(idx !== -1){
      for(let i = idx,k = i + 1,n = method.length;k < n;k++,i++){
      method[i] = method[k];
      method.pop();
      }
    }    
  }
}

