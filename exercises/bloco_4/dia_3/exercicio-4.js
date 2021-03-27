let n = 5;

for (let line = 1; line <= n; line += 2){
  let pyrimid = '';

  for(let espace = 0; espace < (n-line)/2 ; espace += 1){
    pyrimid += ' ';
  }

  for(let asterisco = 0; asterisco < line; asterisco += 1){
    pyrimid += '*';
  }

  for(let espace = 0; espace < (n-line)/2 ; espace += 1){
    pyrimid += ' ';
  }
  console.log(pyrimid);
}
