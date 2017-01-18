var app = angular
  .module('plAngularBase', [
    'ngResource',
    'ngRoute',
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap'
]);

app.controller('MainController', ['$scope', function($scope){

    $scope.$on('PUSH_OPEN_SETTING_BUTTON', function (event) {
        $scope.$broadcast('OPEN_SETTING');
    });

}]);
