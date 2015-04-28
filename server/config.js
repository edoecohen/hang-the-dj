var Sequelize = require('sequelize');

var db = new Sequelize('database', 'username', 'password', {
  host: '127.0.0.1',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  storage: './db/hangdj.sqlite'
});

module.exports = db;