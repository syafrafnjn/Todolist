let todos = []

const renderTodos = () => {
  let listEl = document.querySelector(".todo-list")

  if (listEl) {
    listEl.innerHTML = ""

    todos.forEach((todo, i) => {
      let todoEl = document.createElement("li")

      
      let cardTitleEl = document.createElement("p")
      cardTitleEl.innerText = todo

      
      let removerEl = document.createElement("span")
      removerEl.innerText = "X"
      removerEl.onclick = () => removeTodo(i)

      
      todoEl.appendChild(cardTitleEl)
      todoEl.appendChild(removerEl)

      listEl.appendChild(todoEl)
    })
  }
}

const addTodo = () => {
  let inputEl = document.querySelector(".todo-input")

  if (inputEl && inputEl.value.trim() !== "") {
    todos.push(inputEl.value.trim())

    
    inputEl.value = ""
  }

  renderTodos()
}

const removeTodo = (index) => {
  if (index > -1) {
    todos.splice(index, 1)
  } else {
    todos = []
  }

  renderTodos()
}

document.addEventListener("DOMContentLoaded", renderTodos)
