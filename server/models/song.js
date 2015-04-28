var db = require('../config');
var Sequelize = require('sequelize');

var Song = db.define('song', {
  tableName: 'songs',
  timestamps: true,
  song_id: { 
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: Sequelize.STRING,
  sourceID: Sequelize.STRING,
  source: Sequelize.STRING,
  thumb: Sequelize.STRING,
  listens: Sequelize.INTEGER,
  likes: Sequelize.INTEGER,
  shares: Sequelize.INTEGER,
  comment: Sequelize.TEXT
});

Song.sync({force: true}).then(function () {
  return Song.create({
    title: 'With or Without You',
    comment: 'One of U2s all time bests!'
  });
});

module.exports = Song;