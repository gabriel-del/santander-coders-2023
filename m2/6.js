/*
  Faça um programa com uma função chamada somaImposto.
  A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. 
  A função “altera” o valor de custo para incluir o imposto sobre vendas.
*/

// x * (1-imposto) = custo

// const somaImposto = (taxaImposto, custo) => (custo/(1-taxaImposto)).toFixed(2)
// console.log(somaImposto(0.05, 5))


// const somaImposto = taxaImposto =>  custo => custo/(1-taxaImposto)
// console.log(somaImposto(0.05)(5))


// const Brasil = somaImposto(0.40)
// const Eua = somaImposto(0.07)


// console.log("Preço final:")
// console.log(Brasil(50))
// console.log(Eua(50))


/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
  
  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  
  F(1) = 0
  F(2) = 1

  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.

  Ex: 0, 1, 1, 2, 3, 5, 8, 13

*/


const F = n => n <= 2 ? 1 : F(n-1) + F(n-2)

console.log(F(10))

const G = n =>  Array(n+1).fill().reduce((arr,_,i) => arr.concat(i <= 2 ? 1 : arr[i-2] + arr[i-1]),[])
console.log(G(10))
