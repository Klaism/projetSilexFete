app.controller('Block.NavBar.Controller', ['$scope','$location',function($scope,$location){
    $scope.getClass = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    }
}]);
