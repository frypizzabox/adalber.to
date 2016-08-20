/* HomeProvider Declaration */
HomeProvider = function() {

    // Home Content list
    var list = [
        [
            {
                title: 'Hello Word',
                date: '20/08/2016',
                imgSrc: 'app/home/washedout.png',
                imgName: 'Washed Out'
            },
            {
                title: 'Hello Word',
                date: '20/08/2016',
                imgSrc: 'app/home/washedout.png',
                imgName: 'Washed Out'
            },
            {
                title: 'Hello Word',
                date: '20/08/2016',
                imgSrc: 'app/home/washedout.png',
                imgName: 'Washed Out'
            }
        ],
        [
            {
                title: 'Hello Word',
                date: '20/08/2016',
                imgSrc: 'app/home/washedout.png',
                imgName: 'Washed Out'
            },
            {
                title: 'Hello Word',
                date: '20/08/2016',
                imgSrc: 'app/home/washedout.png',
                imgName: 'Washed Out'
            },
            {
                title: 'Hello Word',
                date: '20/08/2016',
                imgSrc: 'app/home/washedout.png',
                imgName: 'Washed Out'
            }
        ],
        [
            {
                title: 'Hello Word',
                date: '20/08/2016',
                imgSrc: 'app/home/washedout.png',
                imgName: 'Washed Out'
            },
            {
                title: 'Hello Word',
                date: '20/08/2016',
                imgSrc: 'app/home/washedout.png',
                imgName: 'Washed Out'
            },
            {
                title: 'Hello Word',
                date: '20/08/2016',
                imgSrc: 'app/home/washedout.png',
                imgName: 'Washed Out'
            }
        ]
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
        provider('$home', HomeProvider);