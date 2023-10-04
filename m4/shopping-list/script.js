import * as supabase from './supabase.js'


const main = document.querySelector('article')
const total = document.querySelector('#total p')
const list = document.querySelector('#list p')



document.addEventListener('DOMContentLoaded', async () => {
  let db = await supabase.getDb()
  console.log(db)
  db.products.forEach(({name, price, url}) => main.innerHTML += `
<div>
  <img src="${url}"></img>
  <p><b>${name} R$ ${price} </b></p>
  <label>Quantidade:
  <input type="number" placeholder="0" min="0" max="100" title="0-99"/>
</div>`)

})

document.querySelectorAll('input').forEach(item => item.addEventListener('blur', () => {
  document.querySelectorAll('main > div').forEach((item,i) => db.produtos[i].quantidade = item.querySelector('input').value || 0)
  total.innerHTML = db.produtos.reduce((acc,item) => item.preco*item.quantidade + acc,0)
  list.innerHTML = ''
  db.produtos.filter(({quantidade}) => quantidade > 0).forEach(({nome, quantidade, preco}) => list.innerHTML += `
  <p><a>${quantidade} - ${nome} - R\$ ${preco} | R\$ ${preco * quantidade} </a></p>`)
}))



