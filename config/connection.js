// sqlize import
const Sequelize = require('sequelize');

require('dotenv').config();

// use environment to add sequalize username and password
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.dbName,
        process.env.dbUser,
        process.env.dbPass, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;