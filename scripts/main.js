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

let ul = document.querySelector('#todo-bar')

/* Функции */

window.onload = listMain

function listMain() {
    let storedData = localStorage.getItem('todoList')
    
        if (storedData) {
            let todoListTask = JSON.parse(storedData)
            console.log(todoListTask)
           
            
            // for (var i in storedData) {
            for (let i=0; i< todoListTask.length;i++) {
               
                let taskHTML = `<li class="todo-list" id='${todoListTask[i].id}'>
                    <div class="todo-title">
                        <span class="title-area-main">${todoListTask[i].title}</span>
                        <span class="detail-area-main">${todoListTask[i].detail}</span>
                    </div>
                    <div class="todo-buttons">
                        <button class="todo-edit" onclick="editTask(this)" type="button"></button>
                        <button class="todo-delete" onclick='deleteTask1(this)'></button>
                        <button class="todo-done"></button>
                    </div>
                    </li>`;
                    ul.insertAdjacentHTML('beforeend',taskHTML) 
              }
          } else {
            console.log('No data in local storage')  
          }
        //   console.log(storedData)
        //   console.log( JSON.parse(storedData))
        return
}
