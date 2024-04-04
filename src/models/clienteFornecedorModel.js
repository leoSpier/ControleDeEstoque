const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ClienteFornecedor = sequelize.define('cliente_fornecedores', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf_cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    tipo: {
        type: DataTypes.CHAR,
        allowNull: false,
        validate:{
            isIn: [['F', 'C']]
        },
    },
    status:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    // opções do modelo
    tableName: 'clientes_fornecedores',
    timestamp: false,
})

module.exports = ClienteFornecedor;