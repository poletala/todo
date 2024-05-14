// кнопка удаления
let deleteButton = document.querySelector('.todo-delete')  


//   ф-ция удаления элемента 
function deleteTask1(elem) {
    let storedData = JSON.parse(localStorage.getItem('todoList'))
    // console.log(elem.closest('.todo-list').id)
    elem.closest('.todo-list').remove(); 
    for (var i in storedData) {
        if (elem.closest('.todo-list').id === storedData[i].id) {
            storedData.splice(i, 1);
            localStorage.setItem('todoList', JSON.stringify(storedData));
        }
    }
}
   

