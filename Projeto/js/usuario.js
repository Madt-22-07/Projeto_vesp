const express = require('express');
const server = express();
const path = require('path');

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