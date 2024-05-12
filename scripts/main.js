// Задаем время и дату

import { getCurrentTimeDate } from './currentDate.js';
getCurrentTimeDate(); //выполнение ф-ции, ктр отображает время и дату

//ul для вставки списка li заданий
let ul = document.querySelector('#todo-bar') 

//ф-ция отображения списка дел 

function listMain() {
    let todoListTask = JSON.parse(localStorage.getItem('todoList'))
    if (todoListTask.length !== 0) { //при наличии данных в local st
         for (let i = 0; i < todoListTask.length; i++) {
                //задаем стиль блока задания при условии complete & priority
            let liClassComplete = (todoListTask[i].complete) ? 'todo-list-done' : '';
            let liClassPriority = (todoListTask[i].priority === 'low') ? 'todo-low' :
                (todoListTask[i].priority === 'medium') ? 'todo-medium' :
                (todoListTask[i].priority === 'high') ? 'todo-high' : '';
            let liDeadline = (!todoListTask[i].deadline) ? 'has not been set' : todoListTask[i].deadline
            let taskHTML = `<li class="todo-list ${liClassComplete} ${liClassPriority}" id='${todoListTask[i].id}'>
                    <div class="todo-title">
                        <span class="title-area-main">${todoListTask[i].title}</span>
                        <span class="detail-area-main">${todoListTask[i].detail}</span>
                        <span class='task-deadline'>deadline: ${liDeadline}</span>
                    </div>
                    <div class="todo-buttons">
                        <button class="todo-edit" onclick="editTask(this)" type="button"></button>
                        <button class="todo-delete" onclick='deleteTask1(this)'></button>
                        <button class = 'todo-done '  onclick='doneTaskStorage(this)'></button>
                    </div>
                    </li>`;
            ul.insertAdjacentHTML('beforeend',taskHTML)     
        }
    } else {
        console.log('No data in local storage')  
    }
}

window.onload = listMain //при загрузке страницы выполняется ф-ция listMain

