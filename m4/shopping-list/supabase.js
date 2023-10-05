import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://xtwxbtwsfgzjgreqawla.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0d3hidHdzZmd6amdyZXFhd2xhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNDU2OTgsImV4cCI6MjAxMTcyMTY5OH0.SYOZEtkpU8sdd8dqIhJLaRZfOG5J50WB-khWUkO2I6w'
const supabase = createClient(supabaseUrl, supabaseKey)


export async function sign(what) {
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
      btnSignOut.style.display = 'inline'
      inputName.style.display = 'none'
      inputPwd.style.display = 'none'
    } else {
      console.log("Logged Out")
      spanEmail.innerText = ''
      btnSignIn.style.display = 'inline'
      btnSignUp.style.display = 'inline'
      btnSignOut.style.display = 'none'
      inputName.style.display = 'inline'
      inputPwd.style.display = 'inline'
    }
  }
  return res
}
btnSignIn.addEventListener('click', async () => await sign('in'))
btnSignUp.addEventListener('click', () => sign('up'))
btnSignOut.addEventListener('click', () => sign('out'))

const getData = async (table) =>  (await supabase.from(table).select('*')).data
const setData = async data =>  (await supabase.from('products').insert(data)).status

export async function getDb() {
  let db = JSON.parse(localStorage.getItem('db') || '{}')
  db.products = await getData('products')
  localStorage.setItem('db', JSON.stringify(db))
  return db
}
document.addEventListener('DOMContentLoaded', getDb)
btnSend.addEventListener('click', () => console.info("Não implementado"))