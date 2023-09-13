import db from './db.json' assert {type: 'json'};

let main = document.querySelector('main')
db.produtos.forEach(({nome, preco, url}) => main.innerHTML += `
<div>
  <img src="${url}"></img>
  <h1>${nome}</h1>
  <h2>${preco}</h2>
</div>`)
console.log(db.produtos)