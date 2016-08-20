/* HomeCtrl Declaration */
HomeCtrl = function($scope, $home) {

    // Get Home content list from provider
    var homeList = $home.list;

    // Passing values to scope
    $scope.homeList = homeList;

};

/* Controller Declaration */
angular.
    module('adalber.to').
        controller('HomeCtrl', ['$scope', '$home', HomeCtrl]);