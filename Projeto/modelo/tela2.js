const Sequelize = require('sequelize');
const database = require("..db");

const Teladois = database.define('teladois', {
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
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    confirmpassword: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = Teladois;