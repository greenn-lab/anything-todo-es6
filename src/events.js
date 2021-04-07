const list = document.querySelector('#list')

export const inputEvent = (value) => {
  const li = document.createElement('li')

  li.textContent = value

  list.append(li)

  return li
}

export const deleteEvent = (li) => {
  li.remove()
}

export const doneEvent = (li) => {
  li.classList.contains('done')
    ? li.classList.remove('done')
    : li.classList.add('done')
}

export const filtering = (hiddenDone) => {
  list.querySelectorAll('li').forEach((i) => {
    i.classList.remove('hidden')

    if (
      (hiddenDone && i.classList.contains('done')) ||
      (!hiddenDone && !i.classList.contains('done'))
    ) {
      i.classList.add('hidden')
    }
  })
}
