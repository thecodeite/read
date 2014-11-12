angular.module('readApp', ['ngSanitize'])

.controller('MainCtrl', function($scope, $sce){
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
})
