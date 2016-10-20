console.log('About to make a promise!');
var promise = new Promise(function(resolve){
  setTimeout(function(){
    console.log('Resolving the promise!');
    resolve(42);
  }, 2000);
});

console.log('promise object', promise);

promise.then(function(result){
  console.log('inside then #1');
  console.log('result', result);

  return result + 1;
}).then(function(newResult) {
  console.log('inside then #2');
  console.log('newResult', newResult);
});
