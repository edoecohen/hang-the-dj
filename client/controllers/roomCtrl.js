angular.module('hangDJ')
.controller('RoomCtrl', ['$scope', '$http', function($scope, $http){
  $scope.data = {};
  $scope.vidSrc = '';
  $scope.vidURL = '';
  $scope.showVidPlayer = true;

  var youtube_parser = function(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match&&match[7].length==11){
        return match[7];
    }else{
        alert("Url incorrecta");
    }
  };

  var getVideoInfo = function(id){
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=AIzaSyAQMpivS49ylLQln7boLwFsG-eKQqzm1Os&part=snippet,contentDetails,statistics,status'
    }).then(function (resp){
      $scope.showVidPlayer = true;
      var data = resp.data.items[0];
      console.log(data);
      var newSong = {};
      newSong.thumb = data.snippet.thumbnails.medium.url;
      newSong.title = data.snippet.title;
      newSong.sourceID = data.snippet.id;
      newSong.listens = data.statistics.viewCount;
      newSong.likes = 0;
      $scope.songs.push(newSong);
    });
  }

  $scope.getVidSrc = function (url) {
    $scope.vidID = youtube_parser(url);
    $scope.vidSrc = '//www.youtube.com/embed/' + $scope.vidID;
  };

  $scope.addSong = function(){
    var vidID = youtube_parser($scope.url);
    $scope.newSrc = '//www.youtube.com/embed/' + vidID;
    getVideoInfo(vidID);
  }

  $scope.showplayer = true;

  $scope.songs = [
    {
      thumb: 'https://i.ytimg.com/vi/cE6wxDqdOV0/mqdefault.jpg',
      title: 'Video Games',
      listens: 124,
      likes: 19,
      sourceID: 'cE6wxDqdOV0'
    },
    {
      thumb: 'https://i.ytimg.com/vi/tiK-mmr7n4g/mqdefault.jpg',
      title: 'Love is Stronger than Death',
      listens: 324,
      likes: 12,
      sourceID: 'tiK-mmr7n4g'
    },
    {
      thumb: 'https://i.ytimg.com/vi/CdqoNKCCt7A/mqdefault.jpg',
      title: 'Dont You Forget About Me',
      listens: 324,
      likes: 12,
      sourceID: 'CdqoNKCCt7A'
    },
    {
      thumb: 'https://i.ytimg.com/vi/XmSdTa9kaiQ/mqdefault.jpg',
      title: 'With or Without You',
      listens: 324,
      likes: 12,
      sourceID: 'XmSdTa9kaiQ'
    },
    {
      thumb: 'https://i.ytimg.com/vi/MI6xNf4tMcs/mqdefault.jpg',
      title: 'Psychic City',
      listens: 324,
      likes: 12,
      sourceID: 'MI6xNf4tMcs'
    },
  ];



}]);
