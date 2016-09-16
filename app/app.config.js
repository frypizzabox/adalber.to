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
                    when('/post/:postId', {
                        templateUrl: 'app/post/post.template.html',
                        controller: PostCtrl
                    }).
                    otherwise('/home');

            }
        ]).

        /* Filter Configuration */
        filter('renderHTMLCorrectly', function($sce)
        {
            return function(stringToParse)
            {
                return $sce.trustAsHtml(stringToParse);
            }
        }).

        /* Theme Configuration */
        config(function($mdThemingProvider) {

            $mdThemingProvider.definePalette('black', {
                '50': '#858585',
                '100': '#5e5e5e',
                '200': '#424242',
                '300': '#1f1f1f',
                '400': '#0f0f0f',
                '500': '#000000',
                '600': '#000000',
                '700': '#000000',
                '800': '#000000',
                '900': '#000000',
                'A100': '#858585',
                'A200': '#5e5e5e',
                'A400': '#0f0f0f',
                'A700': '#000000',
                'contrastDefaultColor': 'light',
                'contrastDarkColors': '50 A100'
            });

            $mdThemingProvider.definePalette('white', {
                '50': '#ffffff',
                '100': '#ffffff',
                '200': '#ffffff',
                '300': '#ffffff',
                '400': '#ffffff',
                '500': '#ffffff',
                '600': '#f0f0f0',
                '700': '#e0e0e0',
                '800': '#d1d1d1',
                '900': '#c2c2c2',
                'A100': '#ffffff',
                'A200': '#ffffff',
                'A400': '#ffffff',
                'A700': '#e0e0e0',
                'contrastDefaultColor': 'light',
                'contrastDarkColors':
                    '50 100 200 300 400 500 600 700 800 900 A100 A200 A400 A700'
            });

            $mdThemingProvider.theme('default')
                .primaryPalette('black')
                .accentPalette('blue')
                .warnPalette('red')
                .backgroundPalette('white');
        });