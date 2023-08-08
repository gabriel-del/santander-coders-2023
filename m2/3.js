const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let pares=[]
let impares=[]

for (let i=0;  i < lista.length; i++) {
  if(lista[i] % 2 === 0 ){ pares.push(lista[i]) } 
  else{ impares.push(lista[i]) }
}

// console.log({
//   pares: lista.filter(n => n % 2 === 0),
//   impares: lista.filter(n => n % 2 === 1)
// })


// EXERCÍCIO
// Você é um professor, e tem uma lista com alguns alunos (sendo objetos),
// que contém nome, nota1 e nota2. Use o for para percorrer esse array
// e calcular a média das duas notas de cada aluno
// Ao final, imprimir o nome do aluno e a sua média


const listaDeAlunos = [
  { nome: 'João', nota1: 8, nota2: 7 },
  { nome: 'Maria', nota1: 9, nota2: 8 },
  { nome: 'Carlos', nota1: 6, nota2: 5 },
  { nome: 'Ana', nota1: 7, nota2: 6 },
  { nome: 'Pedro', nota1: 10, nota2: 9 },
  { nome: 'Lúcia', nota1: 8, nota2: 7 },
  { nome: 'Fernando', nota1: 7, nota2: 6 },
  { nome: 'Camila', nota1: 9, nota2: 8 },
  { nome: 'Rafael', nota1: 6, nota2: 5 },
  { nome: 'Juliana', nota1: 10, nota2: 9 }
];


// listaDeAlunos.forEach(aluno => {console.log(`${aluno.nome}: ${(aluno.nota1+aluno.nota2)/2}`)})
// console.log(listaDeAlunos.map(aluno => ({aluno: aluno.nome, media: (aluno.nota1+aluno.nota2)/2})))



// EXERCICIO
// Você foi convidado para desenvolver um script para realizar os sorteios para uma casa
// de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
// Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math:
// Math.round(Math.random() * 10)


let dezenas=[]
while(dezenas.length < 6){
  let n = Math.floor(Math.random() * 60) + 1
  if (!dezenas.includes(n)) dezenas.push(n) 
}
console.log(dezenas)

