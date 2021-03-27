let prime = 7;

let cont = 0;

for (let index = 1; index < prime; index += 1){
  if (prime % index === 0){
    cont += 1;
  }
}

if (cont > 2){
  console.log('O número',prime,'não é primo!');
}else{
  console.log('O número',prime,'é primo!');
}