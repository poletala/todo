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

let inputTitle = document.querySelector('.title-area')
let inputDetail = document.querySelector('.detail-area')



/* Функции */


function clearFields() {
    inputTitle.value = '';
    inputDetail.value = '';
}

function addTaskToLocalStorage() {
    let arrTasks = [];
    let todoListItem = {
        title: inputTitle.value,
        detail: inputDetail.value,
        id: Math.random().toString(16).slice(2)
    }
    // console.log(todoListItem)

    arrTasks.push(todoListItem)

    localStorage.setItem('todoList', JSON.stringify(arrTasks));
    // console.log(arrTasks)
}


addButton.addEventListener('click', () => {
    let storedData = JSON.parse(localStorage.getItem('todoList'));
    // console.log(storedData)
    if (storedData === null) {
        addTaskToLocalStorage()
        clearFields()
    }
    else {
     
        let todoListItem = {
            title: inputTitle.value,
            detail: inputDetail.value,
            id: Math.random().toString(16).slice(2)
        };
    
        storedData.push(todoListItem)
        localStorage.setItem('todoList', JSON.stringify(storedData));
        clearFields()
        
    }
    return
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