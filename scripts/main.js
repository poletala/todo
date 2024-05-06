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

//ul для вставки списка li заданий
let ul = document.querySelector('#todo-bar') 

window.onload = listMain //при загрузке страницы выполняется ф-ция listMain

//ф-ция отображения списка дел 

function listMain() {
    let todoListTask = JSON.parse(localStorage.getItem('todoList'))
        if (todoListTask.length !== 0) { //при наличии данных в local st
            // console.log(todoListTask)
            for (let i=0; i< todoListTask.length;i++) {
                //если есть маркер выполненности задания, то вставляется html-код,
                //в ктр сразу заданы нужные стили для checked/unchecked
                if (todoListTask[i].complete === true) { 
                    let taskHTML = `<li class="todo-list todo-list-done" id='${todoListTask[i].id}'>
                        <div class="todo-title">
                            <span class="title-area-main">${todoListTask[i].title}</span>
                            <span class="detail-area-main">${todoListTask[i].detail}</span>
                        </div>
                        <div class="todo-buttons">
                            <button class="todo-edit" onclick="editTask(this)" type="button"></button>
                            <button class="todo-delete" onclick='deleteTask1(this)'></button>
                            <button class = 'todo-done todo-checked'  onclick='doneTaskStorage(this)'></button>
                        </div>
                        </li>`;
                    ul.insertAdjacentHTML('beforeend',taskHTML) 
                } if  (todoListTask[i].complete === false) {
                    let taskHTML = `<li class="todo-list" id='${todoListTask[i].id}'>
                        <div class="todo-title">
                            <span class="title-area-main">${todoListTask[i].title}</span>
                            <span class="detail-area-main">${todoListTask[i].detail}</span>
                        </div>
                        <div class="todo-buttons">
                            <button class="todo-edit" onclick="editTask(this)" type="button"></button>
                            <button class="todo-delete" onclick='deleteTask1(this)'></button>
                            <button class = 'todo-done '  onclick='doneTaskStorage(this)'></button>
                        </div>
                        </li>`;
                    ul.insertAdjacentHTML('beforeend',taskHTML) 
                }      
            }
        } else {
            console.log('No data in local storage')  
        }
}

