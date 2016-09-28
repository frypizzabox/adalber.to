/* TopBarCtrl Declaration */
TopBarCtrl = function($scope, $topBarProvider) {

    // Get Navigation links list from provider
    var navList = $topBarProvider.navList;

    // Get Top Links list from provider
    var linkList = $topBarProvider.linkList;

    // Passing values to scope
    $scope.linkList = linkList;
    $scope.navList = navList;
    $scope.currentNavItem = navList[0].name;
};

/* Controller Declaration */
angular.
    module('adalber.to').
        controller('TopBarCtrl', ['$scope', '$topBarProvider', TopBarCtrl]);