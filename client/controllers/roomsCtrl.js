angular.module('hangDJ')
.controller('RoomsCtrl', ['$scope', function($scope){
  
  $scope.rooms = [
    {
      roomName: 'Hack Reactor Jams',
      followers: 30,
      songs: 401,
      roomPic: 'http://www.sfexaminer.com/binary/245c/OtherNews1.jpg'

    },
    {
      roomName: 'Hot Rap',
      followers: 21,
      songs: 14,
      roomPic: 'http://www.omni-bus.com/n27/imagenes/rapper.jpg'
    },
    {
      roomName: 'All You Need to Dance',
      followers: 210,
      songs: 144,
      roomPic: 'http://static1.squarespace.com/static/53ca0941e4b09aa5f73e3191/t/53ce07dae4b052122ab2d5d3/1406011369198/'
    }
  ];

  $scope.createRoom = function(){
    var newRoom = {};
    newRoom.roomName = $scope.roomName;
    if($scope.roomPic){
      newRoom.roomPic = $scope.roomPic;
    }
    else {
      newRoom.roomPic = "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/black-paint-splatter-icons-media/001603-black-paint-splatter-icon-media-music-eighth-notes.png"
    }
    newRoom.followers = 0;
    newRoom.songs = 0;
    $scope.rooms.push(newRoom);
  }

}]);