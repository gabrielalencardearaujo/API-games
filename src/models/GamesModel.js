const {Sequelize, DataTypes} = require('sequelize');
const Connection = require('@root/database/connection.js');

const GamesModel = Connection.define('games', {
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  describe: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
});

GamesModel.sync({force: false});

module.exports = GamesModel;