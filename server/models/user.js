var db = require('../config');
var Sequelize = require('sequelize');
var Room = require('./room');

var User = db.define('user', {
  tableName: 'users',
  timestamps: true,
  user_id: { 
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  username: { 
    type: Sequelize.STRING,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true
  },
  profilePic: Sequelize.STRING
});

// User can follow many rooms
// User.hasMany(Room);

User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

module.exports = User;