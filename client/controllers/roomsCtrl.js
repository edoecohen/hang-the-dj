angular.module('hangDJ')
.controller('RoomsCtrl', ['$scope', function($scope){
  
  $scope.rooms = [
    {
      roomName: 'Hack Reactor Jams',
      followers: 30,
      songs: 401,
      roomPic: '../assets/room1.jpg'

    },
    {
      roomName: 'Hot Rap',
      followers: 21,
      songs: 14,
      roomPic: '../assets/room2.jpg'
    },
    {
      roomName: 'All You Need to Dance',
      followers: 210,
      songs: 144,
      roomPic: '../assets/room3.jpeg'
    },
    {
      roomName: 'Hack Reactor Jams',
      followers: 30,
      songs: 401,
      roomPic: '../assets/room1.jpg'

    },
    {
      roomName: 'Hack Reactor Jams',
      followers: 30,
      songs: 401,
      roomPic: '../assets/room1.jpg'

    },
    {
      roomName: 'Hot Rap',
      followers: 21,
      songs: 14,
      roomPic: '../assets/room2.jpg'
    },
    {
      roomName: 'All You Need to Dance',
      followers: 210,
      songs: 144,
      roomPic: '../assets/room3.jpeg'
    },
    {
      roomName: 'Hack Reactor Jams',
      followers: 30,
      songs: 401,
      roomPic: '../assets/room1.jpg'

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