// Задаем время и дату
import { getCurrentTimeDate } from './currentDate.js';
getCurrentTimeDate(); //выполнение ф-ции, ктр отображает время и дату

/* кнопки и переменные */

let addButton = document.querySelector('.add-task-btn')
let inputTitle = document.querySelector('.title-area')
let inputDetail = document.querySelector('.detail-area')
let deadlineInput = document.querySelector('#deadline-input')

/* Функции */

//ф-ция проверки полей 

function checkInputs() {
    if (!inputTitle.value) {
        inputTitle.placeholder = 'INVALID TITLE'
        return false
    } if (!inputDetail.value) {
        inputDetail.placeholder = 'INVALID DETAILS'
        return false
    }
    else {
        return true
    }
}

// Ф-ция прослушивания инпута при установке дедлайна и передачи в local st

deadlineInput.addEventListener("input", event => {
    let date = new Date(event.target.value);
    let dayDeadline = (date.getDate() < 10) ? '0'+date.getDate() : date.getDate()
    let monthDeadline = (date.getMonth()+1 <10) ? '0'+(date.getMonth()+1) : date.getMonth()+1
    let yearDeadline = date.getFullYear()
    let deadline = `${dayDeadline}.${monthDeadline}.${yearDeadline}`
    // console.log(deadline)
    localStorage.setItem('deadline', JSON.stringify(deadline));
});


//ф-ция добавления первого дела в local storage 

function addTaskToLocalStorage() {
    let arrTasks = [];
    let todoListItem = {
        title: inputTitle.value,
        detail: inputDetail.value,
        id: Date.now(),
        complete: false,
        priority: document.querySelector('input[name="priority"]:checked').value,
        deadline: JSON.parse(localStorage.getItem('deadline'))
        
    }
    // console.log(todoListItem)
    
    arrTasks.push(todoListItem)

    localStorage.setItem('todoList', JSON.stringify(arrTasks));
    localStorage.setItem('deadline', JSON.stringify(''))
    // console.log(arrTasks)
}

//ф-ция добавления дела в local storage при нажатии кнопки ADD

addButton.addEventListener('click', () => {
    if (checkInputs()) {
        let storedData = JSON.parse(localStorage.getItem('todoList'));
        if (!storedData) { //если local storage пуст
            addTaskToLocalStorage()
        }
        else { //если в ls есть список дел
            let todoListItem = {
                title: inputTitle.value,
                detail: inputDetail.value,
                id: Date.now(),
                complete: false,
                priority: document.querySelector('input[name="priority"]:checked').value,
                deadline: JSON.parse(localStorage.getItem('deadline'))
            };
            storedData.push(todoListItem) //добавляем новое дело в конец списка дел в ls
            localStorage.setItem('todoList', JSON.stringify(storedData)); 
            localStorage.setItem('deadline', JSON.stringify(''))
        }
        location.replace("../index.html"); //переход на главную страницу
    } else {
        return
    }
   
})

//приоритеты
let radios = document.querySelectorAll('input[type="radio"]');
























// let todoList = [
//     {title:1},
//     {title:2}
// ];
// function getTodoList(alltasks) {
//     const liElements = alltasks.map((elem) => {
//         const li = document.createElement('li');
//         li.classList.add('.todo-list');
//         li.append(elem.title);
//         console.log('li', li)
//         return li
//     })
//     return ul.append(...liElements)
// }
// getTodoList(todoList)