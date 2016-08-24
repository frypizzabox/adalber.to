/* HomeCtrl Declaration */
HomeCtrl = function($scope, $location, $home) {

    // Get Home content list from provider
    var homeList = $home.list;

    // Passing values to scope
    $scope.homeList = homeList;

    $scope.goToPage = function(id) {
        $location.path('/post/' + id);
    };

};

/* Controller Configuration */
angular.
    module('adalber.to').
        controller('HomeCtrl', ['$scope', '$location', '$home',  HomeCtrl]);