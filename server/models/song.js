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
  views: Sequelize.INTEGER,
  likes: Sequelize.INTEGER,
  shares: Sequelize.INTEGER,
  comment: Sequelize.TEXT
});

Song.sync({force: true}).then(function () {
  return Song.create({
    title: 'With or Without You',
    comment: 'One of U2s all time bests!',
    sourceID: 'XmSdTa9kaiQ',
    thumb: 'https://i.ytimg.com/vi/XmSdTa9kaiQ/default.jpg',
    views: 103998560,
    likes: 21,
    shares: 12
  });
})
.then(function () {
  return Song.create({
    title: 'Simple Minds - Dont You Forget About Me',
    comment: 'Dont dont dont you forget about me!',
    sourceID: 'CdqoNKCCt7A',
    thumb: 'https://i.ytimg.com/vi/CdqoNKCCt7A/default.jpg',
    views: 103232,
    likes: 21,
    shares: 12
  });
});

module.exports = Song;
