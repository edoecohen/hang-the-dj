var db = require('../config');
var Sequelize = require('sequelize');

var Room = db.define('room', {
  tableName: 'rooms',
  timestamps: true,
  room_id: { 
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  roomName: {
    type: Sequelize.STRING,
    unique: true
  },
  roomPic: Sequelize.STRING,
  isPrivate: {
    Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  createdBy: {

  }
  profilePic: Sequelize.STRING
});

Room.hasOne(User)

Room.sync({force: true}).then(function () {
  // Table created
  return Room.create({
    roomName: 'Hack Reactor Jams',
    roomPic: 'http://www.sfexaminer.com/binary/245c/OtherNews1.jpg'
  });
});

module.exports = Room;