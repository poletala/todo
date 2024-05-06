// Задаем время и дату
const getCurrentTimeDate = () => {
    let currentTimeDate = new Date();
    let month =  ["Jan", "Feb", "Mar", "Apr", "May",  "Jun",  "Jul",  "Aug",  "Sep", "Oct", "Nov", "Dec"]
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
getCurrentTimeDate(); //выполнение ф-ции, ктр отображает время и дату

/* кнопки и переменные */

let addButton = document.querySelector('.add-task-btn')
let inputTitle = document.querySelector('.title-area')
let inputDetail = document.querySelector('.detail-area')


/* Функции */

//ф-ция проверки 
 //это только начало ф-ции проверки 
 // почему при пустом поле ф-ция возвращает true? 
function checkInputs() {
    if (inputTitle.value === '') {
        alert ('Поле не должно быть пустым');
        console.error('false') 
    } else 
    {
        console.log('true') 
    }
}

//ф-ция добавления первого дела в local storage 

function addTaskToLocalStorage() {
    let arrTasks = [];
    let todoListItem = {
        title: inputTitle.value,
        detail: inputDetail.value,
        id: Math.random().toString(16).slice(2),
        complete: false
    }
    // console.log(todoListItem)

    arrTasks.push(todoListItem)

    localStorage.setItem('todoList', JSON.stringify(arrTasks));
    // console.log(arrTasks)
}

//ф-ция добавления дела в local storage при нажатии кнопки ADD

addButton.addEventListener('click', () => {
    checkInputs()
    let storedData = JSON.parse(localStorage.getItem('todoList'));
    if (storedData.length === 0) { //если local storage пуст
        addTaskToLocalStorage()
    }
    else { //если в ls есть список дел
        let todoListItem = {
            title: inputTitle.value,
            detail: inputDetail.value,
            id: Math.random().toString(16).slice(2),
            complete: false
        };
        storedData.push(todoListItem) //добавляем новое дело в конец списка дел в ls
        localStorage.setItem('todoList', JSON.stringify(storedData)); 
    }
    location.replace("../index.html"); //переход на главную страницу
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