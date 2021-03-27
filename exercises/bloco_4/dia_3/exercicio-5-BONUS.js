let n = 9;

for (let line = 1; line <= n; line += 2){
  let pyrimid ='';
  
  for (let espace=0; espace < (n-line)/2; espace +=1){
    pyrimid += ' ';
  }
  
  for (let asterisco = 0; asterisco < line; asterisco += 1){
    if (line === n){
      pyrimid += '*';
    }else if (asterisco === 0 || asterisco === line-1){
      pyrimid += '*';
    }else{
      pyrimid += ' ';
    }
  }

  for (let espace=0; espace < (n-line)/2; espace +=2){
    pyrimid += ' ';
  }
  console.log(pyrimid);
}

