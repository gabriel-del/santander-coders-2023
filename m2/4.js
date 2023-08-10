console.log('### push')
let arr = []
arr.push(1)
arr.push(2)
console.log(arr.length)
console.log(arr)

console.log('### pop')
let numeros = [1, 2, 3, 4];
numeros.pop()
console.log(numeros.length)
numeros.pop()
console.log(numeros.length)
console.log(numeros)

console.log('### shift')
const linguagens = ['javascript', 'python', 'golang', 'java']
linguagens.shift()
console.log(linguagens.length)
linguagens.shift()
console.log(linguagens.length)
console.log(linguagens)

console.log('### at')
const produtos = ['sabao', 'detergente', 'amaciante', 'alvejante', 'sapolio'] 
console.log(produtos.at(0))
console.log(produtos.at(2))
console.log(produtos.at(-1))

console.log('### concat')
const lista1 = ['banana', 'pera', 'melancia']
const lista2 = ['alface', 'tomate', 'rucula']
const lista3 = ['limao', 'laranja', 'acerola']
const lista4 = ['pimenta', 'pimentao', 'alho']
console.log(lista1.concat(lista2))
console.log(lista3.concat(lista4))

console.log('### every')
let pessoas = [
	{ nome: "João", idade: 22 },
	{ nome: "Maria", idade: 17 },
	{ nome: "Pedro", idade: 18 },
	{ nome: "Ana", idade: 22 },
	{ nome: "Carlos", idade: 16 }
]
console.log(pessoas.every(({idade}) => idade >= 18))
console.log(pessoas.every(({nome}) => nome.length > 3))
console.log(pessoas.every(({nome,idade}) => nome !== undefined && idade !== undefined))

console.log('### filter')
let alunos = [
  { nome: 'Ana', idade: 20 },
  { nome: 'Pedro', idade: 18 },
  { nome: 'Maria', idade: 22 },
  { nome: 'João', idade: 17 },
  { nome: 'Lucas', idade: 19 },
  { nome: 'Julia', idade: 21 }
]
console.log(alunos.filter(({idade}) => idade >= 18))
console.log(alunos.filter(({idade}) => idade < 20))
console.log(alunos.filter(({nome}) => nome[0].toLocaleLowerCase() === 'j'))

console.log('### find')
const lugares = [
  { nome: 'Sala de Reuniões', capacidade: 8 },
  { nome: 'Auditório', capacidade: 50 },
  { nome: 'Sala de Treinamento', capacidade: 20 },
  { nome: 'Sala de Conferências', capacidade: 30 },
  { nome: 'Sala de Estudos', capacidade: 12 }
]
console.log(lugares.find(({capacidade}) => capacidade >= 10))
console.log(lugares.find(({capacidade}) => capacidade >= 25))
console.log(lugares.find(({capacidade}) => capacidade >= 40))

console.log('### forEach')
const pizzas = [
  { sabor: 'Mussarela', valor: 20 },
  { sabor: 'Calabresa', valor: 25 },
  { sabor: 'Marguerita', valor: 28 },
  { sabor: 'Frango com Catupiry', valor: 32 },
  { sabor: 'Portuguesa', valor: 30 }
]
pizzas.forEach(({sabor,valor}) => console.log(`R$${valor}: \t${sabor} `))

console.log('### map')
pessoas = [
  { nome: 'João', altura: 1.75, peso: 80 },
  { nome: 'Maria', altura: 1.68, peso: 60 },
  { nome: 'Pedro', altura: 1.80, peso: 70 },
  { nome: 'Ana', altura: 1.65, peso: 55 },
  { nome: 'Carlos', altura: 1.90, peso: 100 }
]
console.log(pessoas.map(({nome,altura,peso}) => ({nome, imc: peso/(altura*altura)})))

console.log('### reduce')
alunos = [
  { nome: 'Ana', notas: [7, 8, 9] },
  { nome: 'Pedro', notas: [5, 6, 7] },
  { nome: 'Maria', notas: [9, 8, 10] },
  { nome: 'João', notas: [6, 7, 8] },
  { nome: 'Lucas', notas: [8, 9, 7] },
  { nome: 'Julia', notas: [10, 8, 9] }
]
console.log(alunos.map(({nome,notas}) => ({nome, 
  media: notas.reduce((acc, curr) => acc+curr)/notas.length
})))

console.log('### reverse')
numeros = [1, 2, 3, 4, 5]
console.log(numeros.reverse())

console.log('### some')
const empregados = [
  { nome: 'João', salario: 1200 },
  { nome: 'Maria', salario: 1500 },
  { nome: 'Pedro', salario: 1800 },
  { nome: 'Ana', salario: 1400 },
  { nome: 'Carlos', salario: 2000 }
]
console.log(empregados.some(({salario}) => salario >= 1500))
console.log(empregados.some(({salario}) => salario <= 1000))

console.log('### sort')
const atletas = [
  { nome: 'João', altura: 1.75, peso: 80 },
  { nome: 'Maria', altura: 1.68, peso: 60 },
  { nome: 'Pedro', altura: 1.80, peso: 70 },
  { nome: 'Ana', altura: 1.65, peso: 55 },
  { nome: 'Carlos', altura: 1.90, peso: 100 }
]
console.log(atletas.sort((a,b) => a.peso - b.peso))
console.log(atletas.sort((a,b) => b.altura - a.altura))
console.log(atletas.sort((a,b) => {
  if (a.nome < b.nome) return -1
  if (a.nome > b.nome) return 1
  return 0;
}))