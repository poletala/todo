let doneButton = document.getElementById('todo-done')
let titleOfDoneTask = document.querySelector('.title-area-main')
let detailOfDoneTask = document.querySelector('.detail-area-main')
let storedTasks = JSON.parse(localStorage.getItem('todoList'))

/* Ф-ция обработки выполненного задания через map c добавлением complete:true/false */

function doneTaskStorage(elem) {
    
    let doneTaskID = elem.closest('.todo-list').id;
    let dataStored = JSON.parse(localStorage.getItem('todoList'));
    
    let newdataStored = dataStored.map(obj => {
        if (obj.id === doneTaskID && obj.complete === false) {
            return {...obj, complete: true};
        } else if (obj.id === doneTaskID && obj.complete === true) {
            return {...obj, complete: false}
        }
         return obj;
    });
    localStorage.setItem('todoList', JSON.stringify(newdataStored));
    changeStyleCheckedTask(elem) //ф-ция см ниже
}


// Ф-ция, которая исправляет стиль блока с заданием при условиях complete:true/false

function changeStyleCheckedTask(elem) {
    let dataStored = JSON.parse(localStorage.getItem('todoList')); 
    let doneTaskID = elem.closest('.todo-list').id; 
    let checkedTaskContainer = elem.closest('.todo-list'); //блок выбранного задания 
    let checkedIcon = elem.closest('.todo-done'); //иконка checked

    for (var i in dataStored)  {
        if (doneTaskID === dataStored[i].id && dataStored[i].complete === true) { //если задание отмечено как выполненное
            checkedTaskContainer.classList.add('todo-list-done'); //добавление класса, ктр изменяет стиль фона блока
            checkedIcon.classList.add('todo-checked') //  -//-ктр изменяет иконку checked
        } else if (doneTaskID === dataStored[i].id && dataStored[i].complete === false) { //если задание не выполнено
            checkedTaskContainer.classList.remove('todo-list-done'); //удаляется фон
            checkedIcon.classList.remove('todo-checked') // изменение иконки обратно
        }
    }
}