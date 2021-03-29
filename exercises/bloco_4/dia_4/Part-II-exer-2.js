let numbers = [2, 3, 6, 7, 10, 1, 50];

function findBiggerNumber(array){
  let bigger;
  for(let index = 0; index < array.length; index += 1){
    if(index ===0){
      bigger = array[index];
    }else if (bigger < array[index]){
      bigger = array[index];
    }
  }
  return bigger;
}

console.log(findBiggerNumber(numbers));