let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info_2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
};

info.recorrente = 'Sim';
info_2.recorrente = 'Sim';


for (let key in info){
  if (info[key] === info_2[key]){
    console.log('Ambos recorrentes');
  }else{
    console.log(info[key],'e',info_2[key]);
  }
}