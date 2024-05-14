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