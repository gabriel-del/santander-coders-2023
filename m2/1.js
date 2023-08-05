
// async function askSalario(){
const askSalario = async () => {
  const rl = require('readline').createInterface({input: process.stdin, output: process.stdout});
  const salario = await new Promise(salario => rl.question("Informe o seu salário: ", salario))
  rl.close()
  return salario

}

(async () => {
  a = await askSalario()
  console.log( "a: " + a)

})()

// main()


// function getSalario(){
// salario = askSalario()
// return salario
// }


aumento = (salario) => {
  if (typeof salario !== "number") return NaN
  if(salario < 0) return undefined
  if (salario <= 1500) return 20 
  if (salario <= 1700) return 15  
  if (salario <= 2000) return 10  
  if (salario > 2000) return 5  
}

show = (salario) => {
  const valorAumento = (salario*aumento(salario)/100).toFixed(2)  
  console.log(`Salário antes do reajuste: R$${salario.toFixed(2)}`);
  console.log(`Percentual de aumento aplicado: ${aumento(salario)}%`);
  console.log(`Valor do aumento: R$${valorAumento}`);
  console.log(`Novo salário, após o aumento: R$${salario+valorAumento}`);
}

// const salario = 1000
// show(salario)
// getSalario()

