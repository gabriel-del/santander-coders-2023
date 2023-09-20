
const input = document.querySelector('input')
const result = document.querySelectorAll('input')[1]


document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    if(/\*|-|\+|\/|\./g.test(button.innerText) && input.value.length === 0) return
    if (button.innerText === 'Del') {
      input.value = input.value.slice(0,-1)
    } else if (button.innerText === 'AC') { 
      input.value = ''
    } else {
      input.value += button.innerText
    }
    if(Number(button.innerText)) result.value = eval(input.value)  
  })

  if (/\*|-|\+|\/|\.|AC|Del/g.test(button.innerText)) {button.style.color = "#FD6A00"}
})
