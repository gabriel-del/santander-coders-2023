import db from './db.json' assert {type: 'json'}
const main = document.querySelector('main')
const total = document.querySelector('#total p')
const list = document.querySelector('#list p')

db.produtos.forEach(({nome, preco, url}) => main.innerHTML += `
<div>
  <img src="${url}"></img>
  <h1>${nome}</h1>
  <h2>${preco}</h2>
  <label>Quantidade:
  <input type="number" placeholder="0" min="0" max="100" title="0-99"/>
</div>`)

document.querySelectorAll('input').forEach(item => item.addEventListener('blur', () => {
  document.querySelectorAll('main > div').forEach((item,i) => db.produtos[i].quantidade = item.querySelector('input').value || 0)
  Cart.printTotal()
  Cart.printList()
  Cart.sendList()

}))

class Cart {
  static total() { return db.produtos.reduce((acc,item) => item.preco*item.quantidade + acc,0)}
  static printTotal() { total.innerHTML = Cart.total()}
  static list() {return db.produtos.filter(({quantidade}) => quantidade > 0)}
  static printList() {
    list.innerHTML = ''
    this.list().forEach(({nome, quantidade, preco}) => list.innerHTML += `
    <p><a>${quantidade} ${nome} ${preco} R\$ (${preco * quantidade} R\$)</a></p>`)}
}

