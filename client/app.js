var myApp = angular.module('myApp', []).config(function($sceDelegateProvider){
	$sceDelegateProvider.resourceUrlWhitelist([
	  'self',
	  'http://www.youtube.com/**'
	  ]);
});

myApp.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
	$scope.data = {};
	$scope.vidSrc = '';
	$scope.vidURL = '';
	$scope.showNewSong = false;

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
      $scope.data = resp.data.items[0];
      $scope.showNewSong = true;
    });
  }

	$scope.getVidSrc = function (url) {
		$scope.vidID = youtube_parser(url);
  	$scope.vidSrc = 'http://www.youtube.com/embed/' + $scope.vidID;
	};

	$scope.addSong = function(){
		var vidID = youtube_parser($scope.url);
  	$scope.newSrc = 'http://www.youtube.com/embed/' + vidID;
		getVideoInfo(vidID);
	}


	$scope.showplayer = true;

	// $scope.newVid = "http://www.youtube.com/embed/" + $scope.videoID;// + "?autoplay=1";


}]);
