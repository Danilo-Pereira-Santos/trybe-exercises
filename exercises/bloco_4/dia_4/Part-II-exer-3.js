let numbers = [2, 4, 6, 7, 10, 0, -3];

function findSmallestIndex(array){
  let smallestIndex;
  let smallestNumber;

  for(let index = 0; index < array.length; index += 1){
    if(index === 0){
      smallestNumber = array[index];
      smallestIndex = index;
    }else if (array[index] < smallestNumber){
      smallestNumber = array[index];
      smallestIndex = index;
    }
  }
  return smallestIndex;
}

console.log(findSmallestIndex(numbers));
