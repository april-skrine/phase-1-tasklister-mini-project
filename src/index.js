document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener('submit', (e) => {
    e.preventDefault()
    dealWithToDo(e.target["new-task-description"].value)
  })
})

function dealWithToDo(todo) {
  let p = document.createElement('p')
  let bttn = document.createElement('button')
  bttn.textContent = "x"
  bttn.addEventListener('click', deleteToDo)
  p.textContent = `${todo} `
  p.appendChild(bttn)
  document.querySelector('#tasks').appendChild(p)
}

function deleteToDo(e) {
  e.target.parentNode.remove()
}