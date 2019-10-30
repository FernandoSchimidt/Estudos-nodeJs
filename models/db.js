const Sequelize = require('sequelize')

//conexao com o banco de dados mysql
const sequelize = new Sequelize('postapp', 'root', 'F3rn4nd0', {
    host: "localhost",
    dialect: 'mysql'
})
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}