/**
 *  microTask
 */ 
export default nextTick = (()=>{

  //callbacks queue
  const callbacks = [];

  // if pending
  let pending = false;

  // time 
  let timerFunc;

  function nextTickHandler() {
    pending = false;
    const copies = callbacks.slice(0);
    callbacks.length = 0;
    copies.map(item=>item());
  }

  if(typeof Promise !== 'undefined' && isNative(Promise)){
    let p = Promise.resolve();
    let logError = err => console.log(err);

    timerFunc = () => {
      p.then(nextTickHandler).catch(logError);

      //clear ios uiview
      if (isIOS) setTimeout(noop);
    };
  } else if(typeof MutationObserver !== 'undefined' &&
    (isNative(MutationObserver) || MutationObserver.toString() === '[object MutationObserverConstructor]')) {
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    let counter = 1;
    let observer = new MutationObserver(nextTickHandler);
    let textNode = document.createTextNode(String(counter));
    // Object.observe is obsolete
    Object.observer(textNode,{
      characterData: true,
    })
    timerFunc = () => {
      textNode = String((counter + 1) % 2);
    }
  }else {
    timerFunc = () => {
      setTimeout(nextTickHandler,0);
    }
  }

  return function queueNextTick(cb?: Function, ctx?: Object) {
    let _resolve;
    callbacks.push(()=>{
      if(cb){
        try{
          cb.call(ctx);
        }catch(e){
          handleError(e, ctx, 'nextTick');
        }
      }else if(_resolve){
        _resolve(ctx);
      }
    });
    if(!pending){
      pending = true;
      timerFunc();
    }

    // if no callback, with event loop
    if(!cb && typeof Promise !== 'undefined'){
      return new Promise((resolve,reject)=>{
        _resolve = resolve;
      })
    }
  }
})();