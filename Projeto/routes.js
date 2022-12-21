const express = require('express')
const path = require('path')
const server = express()

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/tela1.html'))
})
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/tela2.html'))
})
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/home.html'))
})
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/usuario.html'))
})
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})