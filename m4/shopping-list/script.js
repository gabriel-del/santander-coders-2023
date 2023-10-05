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

  article.querySelectorAll('input').forEach(item => item.addEventListener('input', () => {
    article.querySelectorAll('div').forEach((item,i) => db.products[i].quantity = item.querySelector('input').value || 0)
    db.cart = db.products.filter(({quantity}) => quantity > 0)
    db.total =  db.cart.reduce((acc,item) => item.price*item.quantity + acc,0)
    console.log(db)
    total.innerHTML = db.total
    list.innerHTML = ''
    db.cart.forEach(({name, quantity, price}) => 
      list.appendChild(document.createElement('p')).appendChild(document.createElement('a'))
      .innerText = `${quantity} - ${name} - R\$ ${price} | R\$ ${price * quantity}`
    )
  }))
})



