import db from './db.json' assert {type: 'json'}
const main = document.querySelector('main')
const total = document.querySelector('#total span')

db.produtos.forEach(({nome, preco, url}) => main.innerHTML += `
<div>
  <img src="${url}"></img>
  <h1>${nome}</h1>
  <h2>${preco}</h2>
  <label>Quantidade:
  <input type="number" placeholder="0" min="0" max="100" title="0-99"/>
</div>`)

document.querySelectorAll('input').forEach(item => item.addEventListener('blur', () => {
  let acc = 0
  document.querySelectorAll('main > div').forEach(item => {
    acc += parseInt(item.querySelector('h2').innerText) * parseInt(item.querySelector('input').value || 0)})
  total.innerHTML = acc
}))
