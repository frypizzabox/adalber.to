/* TopBarProvider Declaration */
TopBarProvider = function() {

   return {

        $get: function ($http) {

            var navList = [{}];
            var linkList = [{}];

            $http.get('app/content/content.topbar.navigation.js')
                .success(function (data) {

                    for (var i = 0; i < data.length; i++) {

                        var navOption = {
                            title: data[i].title,
                            name: data[i].name,
                            href: data[i].href,
                            route: '/' + data[i].name.toLowerCase()
                        };

                        navList.push(navOption);
                    }
                })
                .error(function (data, status, headers, config) {
                    // Do some error handling here
                });

            $http.get('app/content/content.topbar.link.list.js')
                .success(function (data) {

                    for (var i = 0; i < data.length; i++) {

                        var linkOption = {
                            title: data[i].title,
                            name: data[i].name,
                            href: data[i].href,
                            imgSrc: data[i].imgSrc
                        };

                        linkList.push(linkOption);
                    }
                })
                .error(function (data, status, headers, config) {
                    // Do some error handling here
                });

            return {
                navList: navList,
                linkList: linkList
            };
        }
    };
};

/* Provider Declaration */
angular.
    module('adalber.to').
        provider('$topBar', TopBarProvider);