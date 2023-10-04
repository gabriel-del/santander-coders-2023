import * as supabase from './supabase.js'


const article = document.querySelector('article')
const total = document.querySelector('#total p')
const list = document.querySelector('#list p')

document.addEventListener('DOMContentLoaded', async () => {
  let div, db = await supabase.getDb()
  db.products.forEach(({name, price, url}) => {
    div = document.createElement('div')
    div.append(
      Object.assign(document.createElement('img'), {src: url }),
      Object.assign(document.createElement('p'), {innerText: `${name} R$ ${price}` }),
      Object.assign(document.createElement('input'), {type: 'number', placeholder: '0', min: '0', max: '100', title: '0-99' }))
    article.appendChild(div)
  })
})

document.querySelectorAll('input').forEach(item => item.addEventListener('blur', () => {
  document.querySelectorAll('main > div').forEach((item,i) => db.produtos[i].quantidade = item.querySelector('input').value || 0)
  total.innerHTML = db.produtos.reduce((acc,item) => item.preco*item.quantidade + acc,0)
  list.innerHTML = ''
  db.produtos.filter(({quantidade}) => quantidade > 0).forEach(({nome, quantidade, preco}) => list.innerHTML += `
  <p><a>${quantidade} - ${nome} - R\$ ${preco} | R\$ ${preco * quantidade} </a></p>`)
}))



