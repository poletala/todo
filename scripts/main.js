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

//ф-ция отображения списка дел 

function listMain() {
    let todoListTask = JSON.parse(localStorage.getItem('todoList'))
    if (todoListTask.length !== 0) { //при наличии данных в local st
         for (let i=0; i< todoListTask.length;i++) {
                //задаем стиль блока задания при условии complete & priority
            let liClassComplete = (todoListTask[i].complete) ? 'todo-list-done' : '';
            let liClassPriority = (todoListTask[i].priority === '3low') ? 'todo-low' :
                (todoListTask[i].priority === '2medium') ? 'todo-medium' :
                (todoListTask[i].priority === '1high') ? 'todo-high' : '';
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


/* ф-ция сохранения id задания в local storage и переброса на страницу редактирования*/
function editTask(elem) {
    const elemID = elem.closest('.todo-list').id;
    localStorage.setItem('idEdit', JSON.stringify(elemID));
    location.replace("./pages/edit.html"); 
}






let isAllTasks = true
let isUncompletedTasks = false
let doneTasks = document.getElementsByClassName('todo-list-done')
console.log(doneTasks)

function taskBTN() {
   
    if (isAllTasks) {
        document.querySelector('.todo-all > p').textContent = 'All'
        for (let i = 0; i < doneTasks.length; i++) { //прячем все выполненные дела
            doneTasks[i].style.display = 'none' 
        }
        isAllTasks = false
        isUncompletedTasks = true
        return
    }
    if (isUncompletedTasks) {
        document.querySelector('.todo-all > p').textContent = 'Unfinished'
        for (let i = 0; i < doneTasks.length; i++) { 
            doneTasks[i].style.display = '' 
        }
        isAllTasks = true
        isUncompletedTasks = false
        return
    }
    return
}