const toDoForm = document.getElementById('todo-form')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.getElementById('todo-list')

const TODOS_KEY = 'todos'

//이전에 저장한 값들을 포함하기 위해 let 변수명으로 선언
let toDos = []

function saveToDos() {
  //javascript의 object나 array를 string으로 바꿈
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event) {
  const li = event.target.parentElement
  li.remove()
  console.log(li.id)
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
  saveToDos()
}

function paintToDo(newToDo) {
  //html에 넣어줄 태그 만들어주기
  const li = document.createElement('li')
  li.id = newToDo.id
  const span = document.createElement('span')
  //입력한 값 넣기
  span.innerText = newToDo.text
  const button = document.createElement('button')
  button.innerText = '❌'
  button.addEventListener('click', deleteToDo) //삭제버튼을 누르면 발생하는 이벤트
  li.appendChild(span)
  li.appendChild(button)
  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newToDo = toDoInput.value
  toDoInput.value = '' // enter를 누를때 마다,입력한 것을 비우고 싶다.
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  }
  toDos.push(newTodoObj)
  paintToDo(newTodoObj)
  saveToDos()
}

toDoForm.addEventListener('submit', handleToDoSubmit)

// function sayHello(item) {
//   console.log('this is the turn of', item)
// }

//localStorage에 저장된 toDos 값 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos)
  //이전에 저장된 값들을 toDos에 저장
  toDos = parsedToDos
  console.log(parsedToDos)
  //parsedToDos에 저장된 값을 li에 추가
  parsedToDos.forEach(paintToDo)
}
