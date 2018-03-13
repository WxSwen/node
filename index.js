const es = new EventSource('/message');
console.log('fuck');
es.onmessage = function(e){
  console.log(e.data); // 打印服务器推送的信息
}