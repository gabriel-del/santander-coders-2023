
const askSalario = async () => {
  const rl = require('readline').createInterface({input: process.stdin, output: process.stdout});
  const salario = await new Promise(salario => rl.question("Informe o seu salário: ", salario))
  rl.close()
  return Number(salario)}
  
const getSalario = async (salario) => {
  while (typeof salario != "number" || salario < 0 || isNaN(salario)) salario = await askSalario()
  return salario}

(async () => {
let salario = null
salario = await getSalario(salario)
show(salario)
})()



const aumento = (salario) => {
  if (typeof salario !== "number") return NaN
  if(salario < 0) return undefined
  if (salario <= 1500) return 20 
  if (salario <= 1700) return 15  
  if (salario <= 2000) return 10  
  if (salario > 2000) return 5  
}

const show = (salario) => {
  const valorAumento = (salario*aumento(salario)/100).toFixed(2)  
  console.log(`Salário antes do reajuste: R$${salario.toFixed(2)}`)
  console.log(`Percentual de aumento aplicado: ${aumento(salario)}%`)
  console.log(`Valor do aumento: R$${valorAumento}`);
  console.log(`Novo salário, após o aumento: R$${salario+valorAumento}`)
}



