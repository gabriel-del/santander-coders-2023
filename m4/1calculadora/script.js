
const input = document.querySelector('input')


document.querySelectorAll('button').forEach(button => 
  button.addEventListener('click', () => input.value += button.innerText)
  )