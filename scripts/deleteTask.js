/* Buttons */

let deleteButton = document.querySelector('.todo-delete')
let storedData = JSON.parse(localStorage.getItem('todoList'))

// console.log(storedData)


function deleteTask(elem) {
    // console.log(elem.parentNode.parentNode.children[0].children[0].innerHTML)
    elem.parentNode.parentNode.remove();

//                                                         Не знаю, как работать по id задания 
    for (var i in storedData) {
        if (elem.parentNode.parentNode.children[0].children[0].innerHTML === storedData[i].title) {
            storedData.splice(i, 1);
            localStorage.setItem('todoList', JSON.stringify(storedData));
        }
    }
}

   

