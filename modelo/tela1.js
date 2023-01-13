const Sequelize = require('sequelize');
const database = require("..db");

const Telaum = database.define('telaum', {
    id: {
        type: Sequelize.INTEGER,
        autoIncremente: true,
        allowNull: false,
        primaryKey: true
    },
    usuario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    },
})

module.exports = Telaum;