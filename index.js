const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Bem vindo ao Robô Cripto!')
})

app.get('/criptomoedas', (req, res) => {
  res.send('Moedas disponíveis!')
})

app.listen(port, () => {
  console.log(`Iniciando na porta:${port}`)
})