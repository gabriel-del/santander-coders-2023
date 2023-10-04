const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0d3hidHdzZmd6amdyZXFhd2xhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNDU2OTgsImV4cCI6MjAxMTcyMTY5OH0.SYOZEtkpU8sdd8dqIhJLaRZfOG5J50WB-khWUkO2I6w"

const apiUrl = 'https://xtwxbtwsfgzjgreqawla.supabase.co/rest/v1/products'
const header = {"Content-Type": "application/json", apikey: apiKey, authorization: `Bearer ${apiKey}` }

async function getData() {
  return await (await fetch(apiUrl, { method: "GET", headers: header})).json()
}
async function setData(data) {
  return (await fetch(apiUrl, { method: "POST", headers: header, body: JSON.stringify(data)})).status
}

btnGet.addEventListener("click", async () => console.log(await getData()))
btnSet.addEventListener("click", async () => console.log(await setData({
  name: document.querySelector('#inputName').value,
  price: document.querySelector('#inputPrice').value
})))

