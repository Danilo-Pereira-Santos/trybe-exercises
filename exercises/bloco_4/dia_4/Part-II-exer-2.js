let numbers = [2, 3, 6, 7, 10, 1];

function findBiggerNumber(array){
  let biggerIndice;

  for(let index = 0; index < array.length - 2; index += 1){
    if (array[index] > array[index+1]){
      biggerIndice = index;
    }else{
      biggerIndice = index + 1;
    }
  }
  return biggerIndice;
}

console.log(findBiggerNumber(numbers));