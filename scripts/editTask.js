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
let editedDeadline = document.querySelector('#deadline-input')
let editedPriority = document.querySelectorAll('input[type="radio"]')
let dataStored = JSON.parse(localStorage.getItem('todoList'))
console.log(editedPriority[0].value)

//устанавливаем текущие данные в поля
let idTaskToEdit = JSON.parse(localStorage.getItem('idEdit'))
for (i in dataStored) {
  if (dataStored[i].id === idTaskToEdit) {
    editedTitle.value = dataStored[i].title
    editedDetail.value = dataStored[i].detail 
    let deadlineNewFormat = dataStored[i].deadline.split("."); //изменяем формат даты и вставляем в поле дедлайна
    editedDeadline.valueAsDate =  new Date(deadlineNewFormat[2] + '-' + deadlineNewFormat[1] + '-' + deadlineNewFormat[0] ) 
    console.log( new Date(deadlineNewFormat[2] + '-' + deadlineNewFormat[1] + '-' + deadlineNewFormat[0] ) )//ДЕНЬ!
    localStorage.setItem('deadline', JSON.stringify(dataStored[i].deadline)); //передаем в local storage текущий дедлайн на случай, если не будет задан новый
    for (j in editedPriority) {
      if (editedPriority[j].value === dataStored[i].priority) {
        editedPriority[j].checked = true; 
      }
    }
  }
}

// проверка полей на заполненность 
function checkInputs() {
  if (!editedTitle.value) {
      editedTitle.placeholder = 'INVALID TITLE'
      alert('The title field is empty.')
      return false
  } if (!editedDetail.value) {
      editedDetail.placeholder = 'INVALID DETAILS'
      alert ('The details field is empty.')
      return false
  }
  else {
    return true
  }
}

//прослушивание события установки дедлайна 
let deadlineInput = document.querySelector('#deadline-input')
deadlineInput.addEventListener("input", event => {
  let date = new Date(event.target.value);
  let dayDeadline = (date.getDate() < 10) ? '0'+date.getDate() : date.getDate()
  let monthDeadline = (date.getMonth()+1 <10) ? '0'+(date.getMonth()+1) : date.getMonth()+1
  let yearDeadline = date.getFullYear()
  let deadline = `${dayDeadline}.${monthDeadline}.${yearDeadline}`
  localStorage.setItem('deadline', JSON.stringify(deadline));
});

//передача новых данных в local storage
function updateTask2() {
  if(checkInputs()) {
  let idTaskToEdit = JSON.parse(localStorage.getItem('idEdit'));
  const newdataStored = dataStored.map(obj => {
      if (obj.id === idTaskToEdit) {
        return {...obj, 
          title: editedTitle.value, 
          detail: editedDetail.value, 
          priority: document.querySelector('input[name="priority"]:checked').value,
          deadline: JSON.parse(localStorage.getItem('deadline'))};
      }
      return obj;
    });
  localStorage.setItem('todoList', JSON.stringify(newdataStored));
  localStorage.setItem('deadline', JSON.stringify(''))
  location.replace("../index.html");
  } else {
    return
  }
}







  