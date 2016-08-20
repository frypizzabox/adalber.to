/* Module Configuration */
angular.
    module('adalber.to').

        /* Route Configuration */
        config(['$locationProvider', '$routeProvider',
            function config($locationProvider, $routeProvider) {

                // Most common prefix
                $locationProvider.hashPrefix('!');

                $routeProvider.
                    when('/home', {
                        templateUrl: 'app/home/home.template.html',
                        controller: HomeCtrl
                    }).
                    when('/projects', {
                        template: '<span>Projects</span>'
                    }).
                    when('/about', {
                        template: '<span>About</span>'
                    }).
                    otherwise('/home');

            }
        ]).

        /* Theme Configuration */
        config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue-grey')
                .accentPalette('blue-grey')
                .warnPalette('blue-grey')
                .backgroundPalette('blue-grey');
        });