let n = 5;


for (let line=1; line <= n; line+=1){
  let text='';
  for(let espace = 0; espace < n - line; espace += 1){
    text += ' '
  }
  
  for(let asterisco = 0; asterisco < line; asterisco += 1){
    text += '*';
  }
  console.log(text);
}
