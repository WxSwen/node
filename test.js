// 以下是测试样例

class MyPromise{
  constructor(fn){
    this.queue = [];
    this.result = [];
    this.error = [];
    this.status = 'pending';
    fn(this.resolve.bind(this));
    return this;
  }
  resolve(val) {
    try{
      this.result.push(val instanceof MyPromise ? val.result.pop() : val);
    }catch(err){
      this.status = 'error';
      this.catch(err);
    }
  }
  then(func){
    func(this.result.pop());
    return this;
  }
  catch(func){
    func(this.result.pop());
  }
}

var pre = new MyPromise((resolve)=>{
  setTimeout(()=>{
    resolve('pre');
  },1000)
})
new MyPromise((resolve, reject) => {
  resolve(pre);
}).then(v => {
  console.log('then');
  console.log(v);
})