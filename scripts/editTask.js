// Задаем время и дату
import { getCurrentTimeDate } from './currentDate.js';
getCurrentTimeDate(); //выполнение ф-ции, ктр отображает время и дату


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






  