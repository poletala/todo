// Задаем время и дату
const getCurrentTimeDate = () => {
    let currentTimeDate = new Date();

    let month = new Array();
    month = ["Jan", "Feb", "Mar", "Apr", "May",  "Jun",  "Jul",  "Aug",  "Sep", "Oct", "Nov", "Dec"]

let hours   =  currentTimeDate.getHours();
let minutes =  currentTimeDate.getMinutes();
minutes = minutes < 10 ? '0'+minutes : minutes;

let currentTime = `${hours}:${minutes}`;

let currentDate  = currentTimeDate.getDate();
let currentMonth = month[currentTimeDate.getMonth()];
let CurrentYear = currentTimeDate.getFullYear();

let fullDate = `${currentDate} ${currentMonth}, ${CurrentYear}`;

document.querySelector("time").innerHTML = currentTime;
document.querySelectorAll("time")[1].innerHTML = fullDate;

setTimeout(getCurrentTimeDate, 500);
}

getCurrentTimeDate();

/* кнопки и переменные */

let addButton = document.querySelector('.add-task-btn')
let mainPageButton = document.querySelector('.back-btn')

let inputTitle = document.querySelector('.title-area')
let inputDetail = document.querySelector('.detail-area')
let ul = document.querySelector('#todo-bar')
let arrTasks = []

/* Функции */

window.onload = listMain


function listMain() {
    let storedData = localStorage.getItem('todoList')
        if (storedData) {
            let todoListTask = JSON.parse(storedData)
            for (i=0;i++;i<todoListTask.length) {
                let taskHTML = `<li class="todo-list">
                    <div class="todo-title">
                        <span class="title-area-main">${todoListTask[i].title}</span>
                        <span class="detail-area-main">${todoListTask[i].detail}</span>
                    </div>
                    <div class="todo-buttons">
                        <button class="todo-edit" onclick="location.href='./edit.html'" type="button"></button>
                        <button class="todo-delete"></button>
                        <button class="todo-done"></button>
                    </div>
                    </li>`;
                    ul.insertAdjacentHTML(beforeend,taskHTML)
              }
          } else {
            console.log('Data not found in local storage')
          }
          console.log(storedData)
          console.log( JSON.parse(storedData))
}
    
function clearFields() {
    inputTitle.value = '';
    inputDetail.value = '';
}

function addTaskToLocalStorage() {
    let todoListItem = {
        title: inputTitle.value,
        detail: inputDetail.value
    }
    console.log(todoListItem)
    arrTasks.push(todoListItem)

    localStorage.setItem('todoList', JSON.stringify(arrTasks));
    console.log(arrTasks)
}



addButton.addEventListener('click', () => {
    let storedData = JSON.parse(localStorage.getItem('todoList'));
    if (!!storedData && storedData.length !== 0) {
    addTaskToLocalStorage()
    clearFields()
    
    }
    else {
        let arrTasks = [{
            title: inputTitle.value,
            detail: inputDetail.value}];
        clearFields()
        localStorage.setItem('todoList', JSON.stringify(arrTasks));
       
    }
    // return
})



























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