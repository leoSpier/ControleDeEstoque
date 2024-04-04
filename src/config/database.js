const { sequelize } = require('sequelize');

//configurar a conexão com a base de dados
const sequelize = new Sequelize('controle_estoque', 'postgre', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    loggin: false,
    pool:{
        max:5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

// testando a conexão
async function testeConnection(){
    try{
        await sequelize.authenticate();
        console.log('conexão estabelecida com sucesso!');
    }catch(error){
        console.log('erro ao conectar ao banco de dados: ', error);
    }
}

testeConnection();

module.exports = sequelize;