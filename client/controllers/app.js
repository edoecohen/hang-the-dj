angular.module('hangDJ', ['ngRoute', 'ui.bootstrap', 'youtube-embed']).config(function($sceDelegateProvider){
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


/* TODOS
- refactor $routeProvider to use $stateProvider, $urlRouterProvider
- style the grid in rooms
- style the search bar
- change the search bar to use enter in rooms
- When I click on a room, take me to that room
- Add column to song schema to account for the RoomID it was created in
- When I click on the logo take me to the homepage/ .e 4;pn8;p/
*/
