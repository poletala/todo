//sorting without the local storage changing

function sortTasks() {
    let selectedValue = document.getElementById('sort-select').value; // the choosen option 
    let ulTodo = document.querySelector('#todo-bar') //ul of tasks
    let todoListTask = document.querySelectorAll('.todo-list') //li of tasks
    let arrTodoList = Array.from(todoListTask) //li as Array (for SORT Function)
    console.log(arrTodoList)
    if (selectedValue === 'deadline') { //if 'deadline''s been choosen
        arrTodoList.sort( function(a, b) { // we need to change the format of date in case to use the 'New Date' function
            let aDeadline = a.children[0].children[2].textContent.slice(10) //deadline (format as dd.mm.yyyy)
            let bDeadline = b.children[0].children[2].textContent.slice(10) //deadline (format as dd.mm.yyyy)
            let aDate = aDeadline.split(".")[2] + '-' + aDeadline.split(".")[1] + '-' + aDeadline.split(".")[0]; // deadline (format as yyyy-mm-dd)
            let bDate = bDeadline.split(".")[2] + '-' + bDeadline.split(".")[1] + '-' + bDeadline.split(".")[0]; //deadline (format as yyyy-mm-dd)
            return new Date(aDate).getTime() - new Date(bDate).getTime()//sorting by deadline
        }) 
        arrTodoList.reverse(); //changing the order of just sorted tasks
        for(var i=0; i<arrTodoList.length; i++){
            ulTodo.insertBefore(arrTodoList[i], ulTodo.firstChild); //showing the new order not changing the data in local storage
        }
        return
    }
    if (selectedValue = 'priority') { // if 'priority''s been choosen
       arrTodoList.sort( function (a, b) { 
        let aPriority = a.classList[1] //priority (format as todo1-high, todo2-medium or todo3-low)
        let bPriority = b.classList[1]
        return aPriority[4] - bPriority[4] // sorting by priority (using the number in priority class)
    })
    arrTodoList.reverse(); //changing the order of just sorted tasks
        for(var i=0; i<arrTodoList.length; i++){
            ulTodo.insertBefore(arrTodoList[i], ulTodo.firstChild); //showing the new order not changing the data in local storage
        }
        return
    }
}

let sortingTasks=document.querySelector('#sort-select'); //селект для списка дел
sortingTasks.addEventListener('change', function() {  //при изменении option происходит перезагрузка страницы
    sortTasks();
});

// sorting with the local storage changing and the page reloading

// function GetSelectedItem() {
// let selectedValue = document.getElementById('sort-select').value;  //выбор option 
// let todoListTask = JSON.parse(localStorage.getItem('todoList'));  //список дел из local storage
// //сортируем список дел, создавая новый
// let newDataStored = (selectedValue === 'deadline') //при выборе option deadline 
//     ?  todoListTask.sort( function(a, b) {
//             let aDate = a.deadline.split(".")[2] + '-' + a.deadline.split(".")[1] + '-' + a.deadline.split(".")[0];//меняем формат даты
//             let bDate = b.deadline.split(".")[2] + '-' + b.deadline.split(".")[1] + '-' + b.deadline.split(".")[0];//меняем формат даты
//             return new Date(aDate).getTime() - new Date(bDate).getTime()//сортировка списка дел по deadline
//         }) : 
//     (selectedValue = 'priority') //при выборе option priority 
//         ? todoListTask.sort( (a, b) => a.priority[0] - b.priority[0]) : //сортируем по приоритету задания
//     todoListTask; //иначе список дел без изменений

// localStorage.setItem('todoList', JSON.stringify(newDataStored)); //отсортированный массив заданий на local storage 
// }

// let sortingTasks=document.querySelector('#sort-select'); //селект для списка дел
// sortingTasks.addEventListener('change', function() {  //при изменении option происходит перезагрузка страницы
// 	document.location.reload();
// });