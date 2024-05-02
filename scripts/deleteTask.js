/* Buttons */

let deleteButton = document.querySelector('.todo-delete')
let storedData = JSON.parse(localStorage.getItem('todoList'))

// console.log(storedData)

//                                          Первая версия (Поиск задания через родителей элемента и его заголовка)
// function deleteTask(elem) {
//     console.log(elem.id)
//     elem.parentNode.parentNode.remove();
//     for (var i in storedData) {
//         if (elem.parentNode.parentNode.children[0].children[0].innerHTML === storedData[i].title) {
//             storedData.splice(i, 1);
//             localStorage.setItem('todoList', JSON.stringify(storedData));
//         }
//     }
// }

//                                       Вторая версия (Поиск id через .closest)
function deleteTask1(elem) {
    // console.log(elem.closest('.todo-list').id)
    elem.closest('.todo-list').remove();
    for (var i in storedData) {
        if (elem.closest('.todo-list').id === storedData[i].id) {
            storedData.splice(i, 1);
            localStorage.setItem('todoList', JSON.stringify(storedData));
        }
    }
}
   

