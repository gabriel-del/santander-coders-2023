const enviarEmail = require('./envia-email')
const emailClientes = [
  {nome: "Gabriel", email: "gabriel@gmail.com", receber: true },
  {nome: "Filipe", email: "filipe@gmail.com", receber: false },
  {nome: "Eduardo", email: "eduardo@gmail.com", receber: true },
  {nome: "Caio", email: "caio@gmail.com", receber: true },
  {nome: "Heitor", email: "heitor@gmail.com", receber: false },
  {nome: "Danilo", email: "danilo@gmail.com", receber: true },
]

const emails = emailClientes.filter( ({receber}) => receber === true )
const enviarEmails = emails => emails.forEach( ({email,nome}) => enviarEmail(email, "Oferta Imperdível", `Olá ${nome}! \nVocê recebeu uma super oferta!
Os veículos mais vendidos da semana são o Fusca e Lamborghini.
Temos de novidade o Ford e o HB20.

Se interessou?
Tudo o que você precisa é ser maior de 18 anos para adquirir! Corre que ainda dá tempo.`))

const date = new Date("2023-08-21T18:24:00")
// const date = new Date()
if (date.getDay() === 1) enviarEmails(emails)
