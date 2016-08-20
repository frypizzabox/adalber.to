/* TopBarCtrl Declaration */
TopBarCtrl = function($scope, $topBar) {

    // Get Navigation links list from provider
    var navList = $topBar.list;

    // Passing values to scope
    $scope.navList = navList;
    $scope.currentNavItem = navList[0].name;
};

/* Controller Declaration */
angular.
    module('adalber.to').
        controller('TopBarCtrl', ['$scope', '$topBar', TopBarCtrl]);