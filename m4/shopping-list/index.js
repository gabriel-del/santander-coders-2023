import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://xtwxbtwsfgzjgreqawla.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0d3hidHdzZmd6amdyZXFhd2xhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNDU2OTgsImV4cCI6MjAxMTcyMTY5OH0.SYOZEtkpU8sdd8dqIhJLaRZfOG5J50WB-khWUkO2I6w'
const supabase = createClient(supabaseUrl, supabaseKey)


const getData = async (table) =>  (await supabase.from(table).select('*')).data
const setData = async data =>  (await supabase.from('products').insert(data)).status

const main = document.querySelector('article')
const total = document.querySelector('#total p')
const list = document.querySelector('#list p')

document.addEventListener('DOMContentLoaded', async () => {
  let db = JSON.parse(localStorage.getItem('db') || '{}')
  // db.products = await getData('products')
  localStorage.setItem('db', JSON.stringify(db))
  db.products.forEach(({name, price, url}) => main.innerHTML += `
<div>
  <img src="${url}"></img>
  <p><b>${name} R$ ${price} </b></p>
  <label>Quantidade:
  <input type="number" placeholder="0" min="0" max="100" title="0-99"/>
</div>`)

})

async function sign(what) {
  let user = {email: inputName.value, password: inputPwd.value}, res
  switch (what) {
    case 'in':  res = await supabase.auth.signInWithPassword(user) ;break;
    case 'up':  res = await supabase.auth.signUp(user) ;break;
    case 'out': res = await supabase.auth.signOut()
  }
  if(res.error) { console.log(`Failed: ${res?.data}`)
  } else {
    if (what === 'in' || what === 'up') {
      console.log(`Success: ${res?.data.user.email}`)
      spanEmail.innerText = res.data.user.email
      btnSignIn.style.display = 'none'
      btnSignUp.style.display = 'none'
      inputName.style.display = 'none'
      inputPwd.style.display = 'none'
    } else {
      console.log("Logged Out")
      spanEmail.innerText = ''
      btnSignIn.style.display = 'inline'
      btnSignUp.style.display = 'inline'
      inputName.style.display = 'inline'
      inputPwd.style.display = 'inline'
    }
  }
  return res
}
btnSignIn.addEventListener('click', async () => await sign('in'))
btnSignUp.addEventListener('click', () => sign('up'))
btnSignOut.addEventListener('click', () => sign('out'))



document.querySelectorAll('input').forEach(item => item.addEventListener('blur', () => {
  document.querySelectorAll('main > div').forEach((item,i) => db.produtos[i].quantidade = item.querySelector('input').value || 0)
  Cart.printTotal()
  Cart.printList()
}))

class Cart {
  static total() { return db.produtos.reduce((acc,item) => item.preco*item.quantidade + acc,0)}
  static printTotal() { total.innerHTML = this.total()}
  static list() {return db.produtos.filter(({quantidade}) => quantidade > 0)}
  static printList() {
    list.innerHTML = ''
    this.list().forEach(({nome, quantidade, preco}) => list.innerHTML += `
    <p><a>${quantidade} - ${nome} - R\$ ${preco} | R\$ ${preco * quantidade} </a></p>`)}
}

