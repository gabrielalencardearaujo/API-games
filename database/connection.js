const Sequelize = require('sequelize');
const config = require('../src/configs/config');

const connection = new Sequelize('API_Games', 'root', config.database.password, {
  host: config.database.host,
  dialect: 'mysql',
  timezone: '-03:00'
});

module.exports = connection;