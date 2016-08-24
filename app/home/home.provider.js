/* HomeProvider Declaration */
HomeProvider = function() {

    // Home Content list
    var list = [
        [
            {
                id: 0,
                title: 'Hello Word',
                date: '20/08/2016',
                content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique magna non gravida. Cras sagittis augue et justo ornare varius. Nam mattis tempor eleifend. Donec tincidunt, turpis non tristique maximus, est nunc finibus sem, sed rhoncus eros magna quis erat. Curabitur viverra turpis at eros congue, nec mollis justo rhoncus. Phasellus pharetra tincidunt mattis. Praesent elementum molestie orci at commodo. Sed facilisis mi justo, et luctus nibh egestas ac. Praesent quis accumsan arcu.</p>',
                imgSrc: 'app/home/washedout.png',
                imgName: 'Washed Out'
            },
            {
                id: 1,
                title: 'Hello Word',
                date: '20/08/2016',
                content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique magna non gravida. Cras sagittis augue et justo ornare varius. Nam mattis tempor eleifend. Donec tincidunt, turpis non tristique maximus, est nunc finibus sem, sed rhoncus eros magna quis erat. Curabitur viverra turpis at eros congue, nec mollis</p>',
                imgSrc: 'app/home/washedout.png',
                imgName: 'Washed Out'
            },
            {
                id: 2,
                title: 'Hello Word',
                date: '20/08/2016',
                content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique magna non gravida. Cras sagittis augue et justo ornare varius. Nam mattis tempor eleifend. Donec tincidunt, turpis non tristique maximus, est nunc finibus sem, sed rhoncus eros magna quis erat. Curabitur viverra turpis at eros congue, nec mollis justo rhoncus. Phasellus pharetra tincidunt mattis. Praesent elementum molestie orci at commodo. Sed facilisis mi justo, et luctus nibh egestas ac. Praesent quis accumsan arcu.</p>',
                imgSrc: 'app/home/washedout.png',
                imgName: 'Washed Out'
            }
        ],
        [
            {
                id: 3,
                title: 'Hello Word',
                date: '20/08/2016',
                content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique magna non gravida. Cras sagittis augue et justo ornare varius. Nam mattis tempor eleifend. Donec tincidunt, turpis non tristique maximus, est nunc finibus sem, sed rhoncus eros magna quis erat. Curabitur viverra turpis at eros congue, nec mollis justo rhoncus. Phasellus pharetra tincidunt mattis. Praesent elementum molestie orci at commodo. Sed facilisis mi justo, et luctus nibh egestas ac. Praesent quis accumsan arcu.</p>',
                imgSrc: 'app/home/washedout.png',
                imgName: 'Washed Out'
            },
            {
                id: 4,
                title: 'Hello Word',
                date: '20/08/2016',
                content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique magna non gravida. Cras sagittis augue et justo ornare varius. Nam mattis tempor eleifend. Donec tincidunt, turpis non tristique maximus, est nunc finibus sem, sed rhoncus eros magna quis erat. Curabitur viverra turpis at eros congue, nec mollis justo rhoncus. Phasellus pharetra tincidunt mattis. Praesent elementum molestie orci at commodo. Sed facilisis mi justo, et luctus nibh egestas ac. Praesent quis accumsan arcu.</p>',
                imgSrc: 'app/home/washedout.png',
                imgName: 'Washed Out'
            },
            {
                id: 5,
                title: 'Hello Word',
                date: '20/08/2016',
                content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique magna non gravida. Cras sagittis augue et justo ornare varius. Nam mattis tempor eleifend. Donec tincidunt, turpis non tristique maximus, est nunc finibus sem, sed rhoncus eros magna quis erat. Curabitur viverra turpis at eros congue, nec mollis justo rhoncus. Phasellus pharetra tincidunt mattis. Praesent elementum molestie orci at commodo. Sed facilisis mi justo, et luctus nibh egestas ac. Praesent quis accumsan arcu.</p>',
                imgSrc: 'app/home/washedout.png',
                imgName: 'Washed Out'
            }
        ],
        [
            {
                id: 6,
                title: 'Hello Word',
                date: '20/08/2016',
                content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique magna non gravida. Cras sagittis augue et justo ornare varius. Nam mattis tempor eleifend. Donec tincidunt, turpis non tristique maximus, est nunc finibus sem, sed rhoncus eros magna quis erat. Curabitur viverra turpis at eros congue, nec mollis justo rhoncus. Phasellus pharetra tincidunt mattis. Praesent elementum molestie orci at commodo. Sed facilisis mi justo, et luctus nibh egestas ac. Praesent quis accumsan arcu.</p>',
                imgSrc: 'app/home/washedout.png',
                imgName: 'Washed Out'
            },
            {
                id: 7,
                title: 'Hello Word',
                date: '20/08/2016',
                content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique magna non gravida. Cras sagittis augue et justo ornare varius. Nam mattis tempor eleifend. Donec tincidunt, turpis non tristique maximus, est nunc finibus sem, sed rhoncus eros magna quis erat. Curabitur viverra turpis at eros congue, nec mollis justo rhoncus. Phasellus pharetra tincidunt mattis. Praesent elementum molestie orci at commodo. Sed facilisis mi justo, et luctus nibh egestas ac. Praesent quis accumsan arcu.</p>',
                imgSrc: 'app/home/washedout.png',
                imgName: 'Washed Out'
            },
            {
                id: 8,
                title: 'Hello Word',
                date: '20/08/2016',
                content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique magna non gravida. Cras sagittis augue et justo ornare varius. Nam mattis tempor eleifend. Donec tincidunt, turpis non tristique maximus, est nunc finibus sem, sed rhoncus eros magna quis erat. Curabitur viverra turpis at eros congue, nec mollis justo rhoncus. Phasellus pharetra tincidunt mattis. Praesent elementum molestie orci at commodo. Sed facilisis mi justo, et luctus nibh egestas ac. Praesent quis accumsan arcu.</p>',
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