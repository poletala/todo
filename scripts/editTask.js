// Задаем время и дату
const getTimeDate = () => {
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
  setTimeout(getTimeDate, 500);
}
getTimeDate(); //выполнение ф-ции, ктр отображает время и дату


let editButton = document.querySelector('.todo-todo-edit')

let editedTitle = document.querySelector('.edited-title')
let editedDetail = document.querySelector('.edited-detail')
let dataStored = JSON.parse(localStorage.getItem('todoList'))

/* ф-ция сохранения id задания в local storage и переброса на страницу редактирования*/

function editTask(elem) {
    const elemID = elem.closest('.todo-list').id;
    localStorage.setItem('idEdit', JSON.stringify(elemID));
    location.replace("./pages/edit.html");   
}

/*                               Первый вариант с использованием map */

//ф-ция изменяет данные title&detail на новые 

function updateTask() {
    let idTaskToEdit = JSON.parse(localStorage.getItem('idEdit'));
    const newdataStored = dataStored.map(obj => {
        if (obj.id === idTaskToEdit) {
          return {...obj, title: editedTitle.value, detail: editedDetail.value};
        }
        return obj;
      });
    localStorage.setItem('todoList', JSON.stringify(newdataStored));
    location.replace("../index.html");
}


/*                                Второй вариант с удалением элемента и добавлением нового через push */

/* ф-ция удаления задания из local storage по id */

// function deleteTask() {
//     let idToDelete = JSON.parse(localStorage.getItem('idEdit'));
//     for (var i in dataStored) {
//         if (idToDelete === dataStored[i].id) {
//                 dataStored.splice(i, 1);
//                 localStorage.setItem('todoList', JSON.stringify(dataStored));
//             }
//         }
// }

// /* ф-ция добавления редактированного задания в local storage */

// function editedTaskLocalStorage() {

//     let editedItem = {
//         title: editedTitle.value,
//         detail: editedDetail.value,
//         id: Math.random().toString(16).slice(2)
//     }
//     dataStored.push(editedItem)
//     localStorage.setItem('todoList', JSON.stringify(dataStored));
// }

// function updateTask() {
//     deleteTask();
//     editedTaskLocalStorage() 
//     location.replace("../index.html");
// }




  