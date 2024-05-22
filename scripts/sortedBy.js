function GetSelectedItem() {
let selectedValue = document.getElementById('sort-select').value; //выбор option 

let todoListTask = JSON.parse(localStorage.getItem('todoList'));

// console.log(new Date(todoListTask[7].deadline).getTime(), new Date(todoListTask[8].deadline)) //проверка для дедлайна, значения некорректны

let newdataStored = ((selectedValue === 'deadline') //при выборе option deadline 
    ?  todoListTask.sort( (a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime() ) : //сортируется массив заданий по дате
    (selectedValue = 'priority') //при выборе option priority 
    ? todoListTask.sort( (a, b) => a.priority[0] - b.priority[0]) : //сортируется по приоритету задания
    todoListTask) //иначе остается старое значение
localStorage.setItem('todoList', JSON.stringify(newdataStored)); //отсортированный массив заданий на local storage 
}

let sortingTasks=document.querySelector('#sort-select'); 
sortingTasks.addEventListener('change', function() {//при изменении option происходит перезагрузка страницы
		document.location.reload();
	});

