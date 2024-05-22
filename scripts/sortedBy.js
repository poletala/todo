function GetSelectedItem() {
let selectedValue = document.getElementById('sort-select').value;  //выбор option 
let todoListTask = JSON.parse(localStorage.getItem('todoList'));  //список дел из local storage
//сортируем список дел, создавая новый
let newdataStored = (selectedValue === 'deadline') //при выборе option deadline 
    ?  todoListTask.sort( function(a, b) {
            let aDate = a.deadline.split(".")[2] + '/' + a.deadline.split(".")[1] + '/' + a.deadline.split(".")[0];//меняем формат даты
            let bDate = b.deadline.split(".")[2] + '/' + b.deadline.split(".")[1] + '/' + b.deadline.split(".")[0];//меняем формат даты
            return new Date(aDate).getTime() - new Date(bDate).getTime()//сортировка списка дел по deadline
        }) : 
    (selectedValue = 'priority') //при выборе option priority 
        ? todoListTask.sort( (a, b) => a.priority[0] - b.priority[0]) : //сортируем по приоритету задания
    todoListTask; //иначе список дел без изменений

localStorage.setItem('todoList', JSON.stringify(newdataStored)); //отсортированный массив заданий на local storage 
}

let sortingTasks=document.querySelector('#sort-select'); //селект для списка дел
sortingTasks.addEventListener('change', function() {  //при изменении option происходит перезагрузка страницы
	document.location.reload();
});

