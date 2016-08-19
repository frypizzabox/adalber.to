/* TopBarCtrl Declaration */
TopBarCtrl = function($scope) {

    // Navigation links list
    navItems = [
        {
            title: 'Home',
            name: 'home',
            href: '#!home'
        },
        {
            title: 'Projects',
            name: 'projects',
            href: '#!projects'
        },
        {
            title: 'About',
            name: 'about',
            href: '#!about'
        }
    ];

    // Passing values to scope
    $scope.navItems = navItems;
    $scope.currentNavItem = navItems[0].name;;
};

/* Controller Declaration */
angular.
    module('adalber.to').
        controller('TopBarCtrl', ['$scope', TopBarCtrl]);