pessoas = [
  { nome: 'João', altura: 1.75, peso: 80 },
  { nome: 'Maria', altura: 1.68, peso: 60 },
  { nome: 'Pedro', altura: 1.80, peso: 70 },
  { nome: 'Ana', altura: 1.65, peso: 55 },
  { nome: 'Carlos', altura: 1.90, peso: 100 }
]

// let imc = (altura) => {
//   return (peso) => {
//     return peso/(altura*altura)
//   }
// }

let imc = (altura) =>  (peso) =>  peso/(altura*altura)


console.log(pessoas.map(({nome,altura,peso}) => ({nome, imc: peso/(altura*altura)})))
console.log(pessoas.map(({nome,altura,peso}) => ({nome, imc: imc(altura)(peso)})))


// console.log(imc(1.73)(70))
// console.log(imc(1.73)(80))
// let meuimc = imc(1.73)
// console.log(meuimc(70))
// console.log(meuimc(80))
// console.log(meuimc(90))