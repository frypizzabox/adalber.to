/* TopBarProvider Declaration */
TopBarProvider = function() {

    // Navigation links list
    var list = [
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

    return {
        $get: function() {
            return {
                list: list
            };
        }
    };
};

/* Controller Declaration */
angular.
    module('adalber.to').
        provider('$topBar', TopBarProvider);