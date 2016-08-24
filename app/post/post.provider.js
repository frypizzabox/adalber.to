/* PostProvider Declaration */
PostProvider = function() {

    // Post Content
    var post = {
        title: 'Hello Word',
        date: '20/08/2016',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique magna non gravida. Cras sagittis augue et justo ornare varius. Nam mattis tempor eleifend. Donec tincidunt, turpis non tristique maximus, est nunc finibus sem, sed rhoncus eros magna quis erat. Curabitur viverra turpis at eros congue, nec mollis justo rhoncus. Phasellus pharetra tincidunt mattis. Praesent elementum molestie orci at commodo. Sed facilisis mi justo, et luctus nibh egestas ac. Praesent quis accumsan arcu.</p>',
        imgSrc: 'app/home/washedout.png',
        imgName: 'Washed Out'
    };

    return {
        $get: function() {
            return {
                post: post
            };
        }
    };
};

/* Controller Declaration */
angular.
    module('adalber.to').
        provider('$post', PostProvider);