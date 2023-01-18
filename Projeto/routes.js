const express = require('express')
const path = require('path')
const server = express()

(async() => {
    const database = require('../db');
    const Perfil = require('../modelo/perfil');

    try {
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await Perfil.create({
            nome: 'Maria',
            sobrenome: 'Clara',
            telefone: '999999999',
            bairro: 'bairro A',
            rua: 'rua A',
            cep: '590000000',
            estado: 'PB',
            email: 'mariaclara102033@gmail.com',
            pais: 'Brasil',
            login: 'Maria',
            senha: 'senha123'
        })

        const resultadoCreate2 = await Perfil.create({
            nome: 'Maria 2',
            sobrenome: 'Clara 2',
            telefone: '9999999000',
            bairro: 'bairro b',
            rua: 'rua b',
            cep: '590000000',
            estado: 'RN',
            email: 'mariaclara102033@gmail.com',
            pais: 'Brasil',
            login: 'Maria',
            senha: 'senha123'
        })
        console.log(resultadoCreate);

    } catch (error) {
        console.log(error);
    }
})();

(async() => {
    const database = require('../db');
    const Telaum = require('../modelo/tela1');

    try {
        const tela1 = await database.sync();
        console.log(tela1);

        const tela1Create = await Telaum.create({
            usuario: 'Maria',
            password: 'senha123'
        })

        const tela1Create2 = await Telaum.create({
            usuario: 'Clara',
            password: 'senha123'
        })
        console.log(tela1Create);

    } catch (error) {
        console.log(error);
    }
})();

(async() => {
    const database = require('../db');
    const Teladois = require('../modelo/tela2');

    try {
        const tela2 = await database.sync();
        console.log(tela2);

        const tela2Create = await Teladois.create({
            usuario: 'Maria',
            email: 'mariaclara102033@gmail.com',
            password: 'senha123',
            confirmpassword: 'senha123'
        })

        const tela2Create2 = await Teladois.create({
            usuario: 'Maria C',
            email: 'mariaclara102033@gmail.com',
            password: 'senha1234',
            confirmpassword: 'senha1234'
        })
        console.log(tela2Create);

    } catch (error) {
        console.log(error);
    }
})();

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