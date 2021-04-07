import {
  deleteEvent,
  doneEvent,
  filtering,
  inputEvent
} from './events'

import './sass/default.scss'

document.querySelector('#input').addEventListener('submit', (e) => {
  e.preventDefault()

  const value = e.currentTarget.querySelector('input').value
  const li = inputEvent(value)

  li.addEventListener('click', () => doneEvent(li))
  li.addEventListener('dblclick', () => deleteEvent(li))
})

document
  .querySelector('#hidden-done')
  .addEventListener('click', () => filtering(true))

document
  .querySelector('#hidden-undone')
  .addEventListener('click', () => filtering(false))
