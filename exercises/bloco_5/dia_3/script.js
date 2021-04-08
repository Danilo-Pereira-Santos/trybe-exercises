function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.

// 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
let mounth = document.querySelector('#days');

function creatMounth(){
 
  for (let index = 0; index < dezDaysList.length; index += 1){
    let day = document.createElement('li');
    day.innerText = dezDaysList[index];
    day.className = 'day';
    
    if (day.innerText === '24' || day.innerText === '25' || day.innerText === '31'){
      day.className += ' holiday';
    }
  
    if (day.innerText === '4' || day.innerText === '11' || day.innerText === '18' || day.innerText === '25'){
      day.className += ' friday';
    }
    mounth.appendChild(day);
  }
}

creatMounth();

// Exercicio 2 

function buttonHoliday(ButtonName){
  let button = document.createElement('button');
  let btnHolidayContainer = document.querySelector('.buttons-container');
  
  button.innerText = ButtonName;
  button.id = 'btn-holiday';
  btnHolidayContainer.appendChild(button);
}

buttonHoliday('Feriados');

// Exercicio 3
let btnHoliday = document.querySelector('#btn-holiday');
let holidayDays = document.querySelectorAll('.holiday');
let cinza = 'rgb(238, 238, 238)';
let azul = 'rgb(100, 255, 255)';

btnHoliday.addEventListener('click', function (){
  for (let index = 0; index < holidayDays.length; index += 1){    
    if(holidayDays[index].style.backgroundColor !== azul){
      holidayDays[index].style.backgroundColor = azul;
    }else{
      holidayDays[index].style.backgroundColor = cinza;
    }
  }
});

// exercicio 4

function buttonFriday(ButtonName){
  let btnFriday = document.createElement('button');
  let btnFridayContainer = document.querySelector('.buttons-container');
  
  btnFriday.id = 'btn-friday';
  btnFriday.innerText = ButtonName;
  btnFridayContainer.appendChild(btnFriday);
}

buttonFriday('Sexta-feira');