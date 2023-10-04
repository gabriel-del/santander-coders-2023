import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://xtwxbtwsfgzjgreqawla.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0d3hidHdzZmd6amdyZXFhd2xhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNDU2OTgsImV4cCI6MjAxMTcyMTY5OH0.SYOZEtkpU8sdd8dqIhJLaRZfOG5J50WB-khWUkO2I6w'
const supabase = createClient(supabaseUrl, supabaseKey)

const getData = async () =>  (await supabase.from('products').select('*')).data
const setData = async data =>  (await supabase.from('products').insert(data)).status

btnGet.addEventListener("click", async () => console.log(await getData()))
btnSet.addEventListener("click", async () => console.log(await setData({
  name: document.querySelector('#inputName').value,
  price: document.querySelector('#inputPrice').value
})))

btnSignIn.addEventListener('click', signIn)
btnSignUp.addEventListener('click', signUp)
btnSignOut.addEventListener('click', signOut)

async function signUp() {
  const {data, error } = await supabase.auth.signUp({
  email: 'admin@email.com',
  password: 'admin123',
  })
  console.log(data)
  console.log(error.message)
}

async function signIn() {
  const { data, error } = await supabase.auth.signInWithPassword({ email: 'example@email.com', password: 'example-password'})
  console.log(data)
  return data
}

async function signOut() {
  const { error } = await supabase.auth.signOut()
}

import db from './db.json' assert {type: 'json'}
const main = document.querySelector('main')
const total = document.querySelector('#total p')
const list = document.querySelector('#list p')

db.produtos.forEach(({nome, preco, url}) => main.innerHTML += `
<div>
  <img src="${url}"></img>
  <p><b>${nome} R$ ${preco} </b></p>
  <label>Quantidade:
  <input type="number" placeholder="0" min="0" max="100" title="0-99"/>
</div>`)

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

