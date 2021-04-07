import {
  deleteEvent,
  doneEvent,
  filtering,
  inputEvent,
  resetFilter
} from './events'

import './sass/default.scss'

document.querySelector('#input-form').addEventListener('submit', (e) => {
  e.preventDefault()

  const newTodo = document.querySelector('#new-todo')

  const li = inputEvent(newTodo.value)
  li.addEventListener('click', () => doneEvent(li))
  li.addEventListener('dblclick', () => deleteEvent(li))

  newTodo.value = ''
})

document
  .querySelector('#hidden-done')
  .addEventListener('click', () => filtering(true))

document
  .querySelector('#hidden-undone')
  .addEventListener('click', () => filtering(false))

document
  .querySelector('#hidden-reset')
  .addEventListener('click', () => resetFilter())
