angular.module('RZFAng')
.controller('NavigationController', ['$location', '$scope', function ($location, $scope) {

    $scope.isActive = function (currentPath) {
        if ($location.path().indexOf(currentPath)!=-1)
            return true;
        return false;
    }
}]);