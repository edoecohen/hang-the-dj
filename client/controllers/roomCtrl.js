angular.module('hangDJ')
.controller('RoomCtrl', ['$scope', '$http', '$modal', function($scope, $http, $modal){
  $scope.vidSrc = '';
  $scope.vidURL = '';
  $scope.showVidPlayer = true;
  $scope.showAddSong = false;
  $scope.newSrc = '//www.youtube.com/embed/ZcX0vOVlEr8?modestbranding=1&showinfo=0&fs=0';

  $scope.getAllSongs = function(){
    return $http({
      method: 'GET',
      url: '/room'
    })
    .then(function(resp){
      $scope.songs = resp.data;
      console.log('songs in client:', $scope.songs);
    })
  };

  $scope.getAllSongs();

  $scope.showplayer = true;


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
    console.log('getting vid source!');
  };

  $scope.addSong = function(){
    var vidID = youtube_parser($scope.url);
    // $scope.newSrc = '//www.youtube.com/embed/' + vidID;
    $scope.getVideoInfo(vidID);
    $scope.showAddSong = false;
  }

  $scope.getVideoInfo = function(id){
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=AIzaSyAQMpivS49ylLQln7boLwFsG-eKQqzm1Os&part=snippet,contentDetails,statistics,status'
    }).then(function (resp){
      $scope.showVidPlayer = true;
      var data = resp.data.items[0];

      $scope.newSong = {};
      $scope.newSong.thumb = data.snippet.thumbnails.default.url;
      $scope.newSong.sourceID = data.id;
      $scope.newSong.title = data.snippet.title;
      $scope.newSong.comment = $scope.comment;
      $scope.newSong.listens = 0;
      $scope.newSong.likes = 0;
      $scope.newSong.shares = 0;
      $scope.newSong.source = 'youtube';
      console.log('new song!!!', data);

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



