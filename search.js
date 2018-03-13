var arr = [1,2,3,4,5,6,7,8];
　　console.log(search(arr, 0, 7, 8));

function search(arr, low, high, key){
  arr.sort((a,b) => a-b);

  var mid = parseInt((low + high)/2);

  if(key === arr[mid]) {
    return mid;
  } else if(key > arr[mid]){
    return search(arr, low + 1, high, key);
  } else {
    return search(arr, low, high - 1, key);
  }
}
