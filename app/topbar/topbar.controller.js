/* TopBarCtrl Declaration */
TopBarCtrl = function($scope, $topBar) {

    // Get Navigation links list from provider
    var navList = $topBar.navList;

    // Get Top Links list from provider
    var linkList = $topBar.linkList;

    // Passing values to scope
    $scope.linkList = linkList;
    $scope.navList = navList;
    $scope.currentNavItem = navList[0].name;
};

/* Controller Declaration */
angular.
    module('adalber.to').
        controller('TopBarCtrl', ['$scope', '$topBar', TopBarCtrl]);