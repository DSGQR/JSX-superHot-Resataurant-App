const fetch = window.fetch

document.querySelector('.submit').addEventListener('click', event => {
  event.preventDefault()

  fetch('', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      name: document.querySelector('#').value,
      phone: document.querySelector('#').value,
      email: document.querySelector('#').value,
      id: document.querySelector('#').value
    })
  })
    .then(r => {
      window.location = ''
    })
    .catch(e => console.error(e))
})