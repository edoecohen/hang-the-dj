angular.module('hangDJ')
.controller('RoomCtrl', ['$scope', '$http', '$modal', function($scope, $http, $modal){
  
  $scope.showAddSong = false;
  // $scope.newSrc = '//www.youtube.com/embed/ZcX0vOVlEr8?modestbranding=1&showinfo=0&fs=0';
  $scope.counter = 0;

  $scope.getAllSongs = function(){
    return $http({
      method: 'GET',
      url: '/room'
    })
    .then(function(resp){
      $scope.songs = resp.data;
      $scope.loadSong($scope.counter);
    })
  };

  $scope.getAllSongs();

  $scope.showplayer = true;

  $scope.loadSong = function(counter){
    $scope.playSong = $scope.songs[counter];
    $scope.newSrc = $scope.playSong.sourceID;
  };

  $scope.isThisPlaying = function(){
    if(this.sourceID === $scope.newSrc){
      return true;
    }
  }

  $scope.playerVars = {
    modestbranding: 1,
    showinfo: 0,
    fs: 0,
    autoplay: 1
  };

  $scope.$on('youtube.player.ended', function ($event, player) {
    $scope.nextSong();
  });

  $scope.nextSong = function(){
    $scope.counter++;
    $scope.loadSong($scope.counter);
  };

  $scope.previousSong = function(){
    $scope.counter--;
    $scope.loadSong($scope.counter);
  }

  $scope.player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player( 'player', {
      events: { 'onStateChange': onPlayerStateChange }
    });
  }
  function onPlayerStateChange(event) {
    switch(event.data) {
      case 0:
        record('video ended');
        break;
      case 1:
        record('video playing from '+player.getCurrentTime());
        break;
      case 2:
        record('video paused at '+player.getCurrentTime());
    }
  }
  function record(str){
    console.log(str);
  };


  var youtube_parser = function(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match&&match[7].length==11){
      return match[7];
    };
  };

  $scope.getVidSrc = function (url) {
    $scope.vidID = youtube_parser(url);
    $scope.vidSrc = '//www.youtube.com/embed/' + $scope.vidID;
  };

  $scope.addSong = function(){
    var vidID = youtube_parser($scope.url);
    $scope.getVideoInfo(vidID);
    $scope.showAddSong = false;
  }

  $scope.getVideoInfo = function(id){
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=AIzaSyAQMpivS49ylLQln7boLwFsG-eKQqzm1Os&part=snippet,contentDetails,statistics,status'
    }).then(function (resp){
      
      var data = resp.data.items[0];

      $scope.newSong = {};
      $scope.newSong.thumb = data.snippet.thumbnails.default.url;
      $scope.newSong.sourceID = data.id;
      $scope.newSong.title = data.snippet.title;
      $scope.newSong.comment = $scope.comment;
      $scope.newSong.views = data.statistics.viewCount;
      $scope.newSong.likes = 0;
      $scope.newSong.shares = 0;
      $scope.newSong.source = 'youtube';
      
      $scope.songs.push($scope.newSong); 
      $scope.saveSong($scope.newSong);
    });
  };

  $scope.saveSong = function (song){
      console.log('test', song);
      return $http({
        method: 'POST',
        url: '/room',
        data: song
      })
      .then(function (resp) {
        console.log('response data:', resp.data);
        return resp.data;
      });
  };



}]);
  // $scope.songs = [
  //   {
  //     thumb: 'https://i.ytimg.com/vi/cE6wxDqdOV0/mqdefault.jpg',
  //     title: 'Video Games',
  //     listens: 124,
  //     likes: 19,
  //     sourceID: 'cE6wxDqdOV0'
  //   },
  //   {
  //     thumb: 'https://i.ytimg.com/vi/tiK-mmr7n4g/mqdefault.jpg',
  //     title: 'Love is Stronger than Death',
  //     listens: 324,
  //     likes: 12,
  //     sourceID: 'tiK-mmr7n4g'
  //   },
  //   {
  //     thumb: 'https://i.ytimg.com/vi/CdqoNKCCt7A/mqdefault.jpg',
  //     title: 'Dont You Forget About Me',
  //     listens: 324,
  //     likes: 12,
  //     sourceID: 'CdqoNKCCt7A'
  //   },
  //   {
  //     thumb: 'https://i.ytimg.com/vi/XmSdTa9kaiQ/mqdefault.jpg',
  //     title: 'With or Without You',
  //     listens: 324,
  //     likes: 12,
  //     sourceID: 'XmSdTa9kaiQ'
  //   },
  //   {
  //     thumb: 'https://i.ytimg.com/vi/MI6xNf4tMcs/mqdefault.jpg',
  //     title: 'Psychic City',
  //     listens: 324,
  //     likes: 12,
  //     sourceID: 'MI6xNf4tMcs'
  //   },
  // ];



