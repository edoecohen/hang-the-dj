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
  description: Sequelize.TEXT,
  sourceID: Sequelize.STRING,
  source: Sequelize.STRING,
  thumb: Sequelize.STRING
});

Song.sync({force: true}).then(function () {
  return Song.create({
    title: 'With or Without You'
  });
});

module.exports = Song;