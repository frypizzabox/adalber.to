/* TopBarProvider Declaration */
TopBarProvider = function() {

    // Navigation links list
    var navList = [
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
        $get: function() {
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