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
  comment: Sequelize.TEXT,
  userName: Sequelize.TEXT,
  userPic: Sequelize.TEXT
});

Song.sync({force: true}).then(function () {
  return Song.create({
    title: 'With or Without You',
    comment: "One of U2's best!",
    sourceID: 'XmSdTa9kaiQ',
    thumb: 'https://i.ytimg.com/vi/XmSdTa9kaiQ/default.jpg',
    views: 103998560,
    likes: 21,
    shares: 12,
    userName: 'Fred Zirdung',
    userPic: 'https://scontent-2.2914.fna.fbcdn.net/hprofile-xfp1/v/t1.0-1/p320x320/1782045_10206246763914505_5493084537002704688_n.jpg?oh=b4a5f0c7429f47e6fb59eb9f98da9d07&oe=55DF7470'
  });
})
.then(function () {
  return Song.create({
    title: "MC Hammer - U Can't Touch This",
    comment: 'What time is it!?',
    sourceID: 'otCpCn0l4Wo',
    thumb: 'https://i.ytimg.com/vi/otCpCn0l4Wo/default.jpg',
    views: 2323232,
    likes: 14,
    shares: 7,
    userName: 'Mike Yao',
    userPic: 'https://scontent-2.2914.fna.fbcdn.net/hprofile-xpf1/v/t1.0-1/c53.0.320.320/p320x320/1975151_10203485312918207_919839112_n.jpg?oh=b0ecc2261a7825270aab34660c85f323&oe=559BFCF0'
  });
})
.then(function () {
  return Song.create({
    title: "Kanye West - POWER",
    comment: "What's one to do with all that power!?",
    sourceID: 'L53gjP-TtGE',
    thumb: 'https://i.ytimg.com/vi/L53gjP-TtGE/default.jpg',
    views: 55651232,
    likes: 9,
    shares: 2,
    userName: 'Michelle Trame',
    userPic: 'https://scontent-2.2914.fna.fbcdn.net/hprofile-xpf1/v/t1.0-1/p320x320/10592681_10103664890397086_3340993436858952232_n.jpg?oh=629f5f01ec527d92f610c2f374281b6d&oe=5597C4F2'
  });
});

module.exports = Song;
