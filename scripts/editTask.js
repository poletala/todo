
let editButton = document.querySelector('.todo-todo-edit')

let editedTitle = document.querySelector('.edited-title')
let editedDetail = document.querySelector('.edited-detail')
let dataStored = JSON.parse(localStorage.getItem('todoList'))

/* ф-ция удаления выбранного задания из local storage */

/*           как вставлять в textarea Title и Detail старые данные из local storage? Чтобы открывалась страница для редактирования 
/*           с заполненными полями, которые пользователь и должен изменить? я пыталась сделать editedTitle.value = dataStored[i].title
/*           и никак не выходит. Нужно ли это вообще?    */


function editTask(elem) {
    location.replace("./pages/edit.html"); 
 /*                                              здесь нужна какая-то проверка введено ли что-либо? иначе сразу идет удаление*/
    for (var i in dataStored) {
        console.log(elem.parentNode.parentNode.children[0].children[0])
        if (elem.parentNode.parentNode.children[0].children[0].innerHTML === dataStored[i].title) {
            dataStored.splice(i, 1);
            localStorage.setItem('todoList', JSON.stringify(dataStored));
        }
    }

}

/* ф-ция добавления редактированного задания в local storage */

function editedTaskLocalStorage() {

    let editedItem = {
        title: editedTitle.value,
        detail: editedDetail.value,
        id: Math.random().toString(16).slice(2)
    }
    dataStored.push(editedItem)
    localStorage.setItem('todoList', JSON.stringify(dataStored));
}

function updateTask(elem) {
    /*                                              Данная функция не работает, если задач более одной */
    editTask(elem);
    editedTaskLocalStorage() 
    location.replace("../index.html");
}
