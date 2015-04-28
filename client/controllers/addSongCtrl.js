angular.module('hangDJ')
.controller('AddSongCtrl', ['$scope', '$modal', '$log', function($scope, $modal, $log){

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: './views/addSong.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function () {
      // $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
}])
.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', '$http', function ($scope, $modalInstance, $http) {

  // $scope.items = items;
  // $scope.selected = {
  //   item: $scope.items[0]
  // };


  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
    $modalInstance.close($scope.addSong());
    // $modalInstance.close($scope.$emit('someEvent'));
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);