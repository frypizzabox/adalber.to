/* TopBarCtrl Declaration */
TopBarCtrl = function($scope, $topBar) {

    // Get Navigation links list from provider
    navItems = $topBar.navItems;

    // Passing values to scope
    $scope.navItems = navItems;
    $scope.currentNavItem = navItems[0].name;
};

/* Controller Declaration */
angular.
    module('adalber.to').
        controller('TopBarCtrl', ['$scope', '$topBar', TopBarCtrl]);