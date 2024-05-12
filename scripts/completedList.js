// Задаем время и дату
import { getCurrentTimeDate } from './currentDate.js';
getCurrentTimeDate(); //выполнение ф-ции, ктр отображает время и дату

//ul для вставки списка li заданий
let ul = document.querySelector('#todo-bar')

//ф-ция отображения списка выполненных заданий

function completedList() {
    let storedData = JSON.parse(localStorage.getItem('todoList'));
    if (storedData.length !== 0) { //при наличии данных в local st 
        for (let i=0; i< storedData.length;i++) {
            if (storedData[i].complete) {  //при наличии выполненных заданий
                let taskHTML = `<li class="todo-list" id='${storedData[i].id}'> 
                    <div class="todo-title">
                        <span class="title-area-main">${storedData[i].title}</span>
                        <span class="detail-area-main">${storedData[i].detail}</span>
                     </div>
                    </li>`;
                ul.insertAdjacentHTML('beforeend',taskHTML) // вставка html-кода задания
            }
        }
    } 
   else{
        console.log('No data in local storage') 
    }
}

window.onload = completedList //при загрузке страницы выполняется ф-ция completedList