function iterativeLog(array){
  array.forEach(function(index, element){
    console.log(`${index}: ${element}`);
  });
}
function iterate(callback()){
  array = ['a','b','c','d'];
  array.forEach(callback());
  return array;
}
function doToArray(array, callback()){
  array.forEach(callback());
}
