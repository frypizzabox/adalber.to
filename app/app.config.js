/* Module Configuration */
angular.
    module('adalber.to').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {

            /* Most common prefix */
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/home', {
                    template: '<span>Home</span>'
                }).
                when('/about', {
                   template: '<span>About</span>'
                }).
                otherwise('/home');
        }
    ]);