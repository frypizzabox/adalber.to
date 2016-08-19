/* TopBarProvider Declaration */
TopBarProvider = function() {

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

    return {
        $get: function() {
            return {
                navItems: navItems
            };
        }
    };
};

/* Controller Declaration */
angular.
    module('adalber.to').
        provider('$topBar', TopBarProvider);