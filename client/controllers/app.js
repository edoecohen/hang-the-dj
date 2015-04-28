angular.module('hangDJ', ['ngRoute']).config(function($sceDelegateProvider){
	$sceDelegateProvider.resourceUrlWhitelist([
	  'self',
	  'http://www.youtube.com/**',
    'https://www.youtube.com/**'
	  ]);
})

.config(function($routeProvider){

  $routeProvider
  .when('/', {
    templateUrl : './views/rooms.html',
    controller : 'RoomsCtrl'
  })
  .when('/room/:roomID', {
    templateUrl : './views/room.html',
    controller : 'RoomCtrl'
  })
  .when('/signup', {
    templateUrl : './views/signup.html',
    controller : 'SignupCtrl'
  })
  .when('/login', {
    templateUrl : './views/login.html',
    controller : 'LoginCtrl'
  })

  .otherwise({
    redirectTo : '/'
  });
});
