async function getData() {
  return await (await fetch(apiUrl, { method: "GET", headers: header})).json()
}
async function setData(data) {
  return (await fetch(apiUrl, { method: "POST", headers: header, body: JSON.stringify(data)})).status
}

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://xtwxbtwsfgzjgreqawla.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0d3hidHdzZmd6amdyZXFhd2xhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNDU2OTgsImV4cCI6MjAxMTcyMTY5OH0.SYOZEtkpU8sdd8dqIhJLaRZfOG5J50WB-khWUkO2I6w'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getData2(){
return (await supabase.from('products').select('*')).data
}

btnGet.addEventListener("click", async () => console.log(await getData2()))
btnSet.addEventListener("click", async () => console.log(await setData({
  name: document.querySelector('#inputName').value,
  price: document.querySelector('#inputPrice').value
})))



