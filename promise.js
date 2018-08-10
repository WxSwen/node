class PromiseTest{
  constructor(executor){
    this.value = null;
    this.reason = null;
    this.state = 'pending';
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];

    let resolve = value => {
      if(this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.resolvedCallbacks.forEach(fn => fn());
      }
    }

    let reject = reason => {
      if(this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.resolvedCallbacks.forEach(fn => fn());
      }
    }

    try {
      executor(resolve, reject)
    } catch(e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : e => { throw err };

    let promise2 = new PromiseTest((resolve, reject) => {
      if(this.state === 'fulfilled') {
        setTimeout(() => {
          let x = onFulfilled(this.value);
          resolvePromise(promise2, x, resolve, reject);
        })
      }
  
      if(this.state === 'rejected') {
        onRejected(this.reason);
      }
  
      if(this.state === 'pending') {
        this.resolvedCallbacks.push(() => {
          setTimeout(() =>{
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          })
        });
        this.rejectedCallbacks.push(() => {
          onRejected(this.reason);
        });
      }
    })

    return promise2;
  }

}

let p = new PromiseTest((resolve, reject) => {
  setTimeout(()=>{
    resolve(200);
  },2000)
})

function resolvePromise(promise2, x, resolve, reject) {
  if(x === promise2) {
    return reject(new Error('loop'));
  }
  if(x !== null && (typeof x === 'object' || typeof x === 'function')) {
    let called;
    try{
      let then = x.then;
      if(typeof then === 'function') {
        then.call(this, y => {
          if(called) return;
          called = true;
          
          resolvePromise(promise2, y, resolve, reject);
        }, e => {
          if(called) return;
          called = true;

          reject(e);
        })
      }
    } catch(e) {
      reject(e);
    }
  } else {
    resolve(x);
  }
}

// function resolvePromise(promise2, x, resolve, reject) {
//   if(x === promise2) {
//     return reject(new Error('loop'));
//   }

//   let called;

//   if(x !== null && (typeof x === 'object' || typeof x === 'function')) {
//     try {
//       let then = x.then;
//       if(typeof then === 'function') {
//         then.call(this, y => {
//           if(called) return;
//           called = true;

//           resolvePromise(promise2, y, resolve, reject);
//         }, err => {
//           if(called) return;
//           called = true;
//           reject(err);
//         })
//       } else {
//         resolve(x);
//       }
//     } catch(e) {
//       if(called) return;
//       called = true;
//       reject(e);
//     }
//   } else {
//     resolve(x);
//   }
// }

p.then(res => res + 100, e => console.log(e))
 .then(res => console.log(res), e => console.log(e)) 

// let p = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve(200);
//   },2000)
// })

// p.then(res => res + 100, e => console.log(e))
//  .then(res => console.log(res), e => console.log(e)) 