let angulo_1 = -1;
let angulo_2 = 40;
let angulo_3 = 90;

let triangulo = angulo_1 + angulo_2 + angulo_3;

if (triangulo === 180){
    console.log('true');
}else if (angulo_1 < 0 || angulo_2 < 0 || angulo_3 < 0){
    console.log("erro: ângulo negativo!");
}else{
    console.log('false');
}