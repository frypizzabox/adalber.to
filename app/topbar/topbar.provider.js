/* TopBarProvider Declaration */
TopBarProvider = function() {

    var navList = [{}];

    var linkList = [
        {
            title: 'Home',
            name: 'home',
            href: 'http://google.com',
            imgSrc: 'app/topbar/octocat.png'
        },
        {
            title: 'Projects',
            name: 'projects',
            href: 'http://google.com',
            imgSrc: 'app/topbar/octocat.png'
        },
        {
            title: 'About',
            name: 'about',
            href: 'http://google.com',
            imgSrc: 'app/topbar/octocat.png'
        }
    ];

    return {
        $get: function($http) {

            $http.get('app/content/content.navigation.js')
                 .success(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        var navOption = {
                            title: data[i].title,
                            name: data[i].name,
                            href: data[i].href
                        };

                        navList.push(navOption);
                    }
                 })
                 .error(function (data, status, headers, config) {
                     //  Do some error handling here
                 });

            return {
                navList: navList,
                linkList: linkList
            };
        }
    };
};

/* Controller Declaration */
angular.
    module('adalber.to').
        provider('$topBar', TopBarProvider);