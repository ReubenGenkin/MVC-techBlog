// sqlize import
const Sequelize = require('sequelize');

require('dotenv').config();

// use environment to add sequalize username and password
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env['sqlUser'],
        process.env['sqlPass'],
        process.env['dbName'], {
        host: 'localhost',
        dialect: 'mysql',
        port: 3001
    });
}

module.exports = sequelize;