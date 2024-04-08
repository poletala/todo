// Задаем время и дату
const getCurrentTimeDate = () => {
    let currentTimeDate = new Date();

    let month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

let hours   =  currentTimeDate.getHours();
let minutes =  currentTimeDate.getMinutes();
minutes = minutes < 10 ? '0'+minutes : minutes;

let currentTime = `${hours}:${minutes}`;

let currentDate  = currentTimeDate.getDate();
let currentMonth = month[currentTimeDate.getMonth()];
let CurrentYear = currentTimeDate.getFullYear();

let fullDate = `${currentDate} ${currentMonth}, ${CurrentYear}`;

document.querySelector("time").innerHTML = currentTime;
// document.querySelectorAll("time")[1].innerHTML = fullDate;

setTimeout(getCurrentTimeDate, 500);
}

getCurrentTimeDate();


// Кнопка Добавить
const addButton = document.querySelector('.add-task-btn');
// 
let todoTask = document.querySelector('.todo-list');
let todoTitleMain = document.querySelector('.title-area-main');
let todoDetailMain = document.querySelector('.detail-area-main');
let toAddTitle = document.querySelector('.title-area');
let toAddDetail = document.querySelector('.detail-area');
let todo = document.querySelector('.todo-list')

/* записываем данные туду из локал сторэдж */
function init() {
    const fromStorageTitle = localStorage.getItem('todo-title');
    const fromStorageDetail = localStorage.getItem('todo-detail');
    if (fromStorageDetail && fromStorageTitle) {
        todo.innerHTML =  `<li class="todo-title">
        <span class="title-area-main">${fromStorageTitle}</span>
        <span class="detail-area-main">${fromStorageDetail}</span>
        </li>`;
    }
}

/*сохраняем данные, внесенные пользователем, в локал сторэдж*/
function save() {
    localStorage.setItem('todo-title', toAddTitle.value);
    localStorage.setItem('todo-detail', toAddDetail.value);
}


// При нажатии на кнопку ADD добавляетяс заголовок и детали дела

addButton.addEventListener('click', () => {
    save()
    init()
})
