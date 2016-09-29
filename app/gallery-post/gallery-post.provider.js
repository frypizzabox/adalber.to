/* GalleryPostProvider Declaration */
GalleryPostProvider = function() {

    // Post Content
    var post = {
        title: 'Hello Word',
        date: '20/08/2016',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique magna non gravida. Cras sagittis augue et justo ornare varius. Nam mattis tempor eleifend. Donec tincidunt, turpis non tristique maximus, est nunc finibus sem, sed rhoncus eros magna quis erat. Curabitur viverra turpis at eros congue, nec mollis justo rhoncus. Phasellus pharetra tincidunt mattis. Praesent elementum molestie orci at commodo. Sed facilisis mi justo, et luctus nibh egestas ac. Praesent quis accumsan arcu.</p>',
        imgSrc: 'app/gallery-post/washedout.png',
        imgName: 'Washed Out',
        relevantLinks:
        [
            {
                category: 'Projects',
                linkList:
                [
                    {
                        title: 'Hello Word 1',
                        date: '20/08/2016',
                        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique magna non gravida...</p>',
                        imgSrc: 'app/gallery-post/washedout.png',
                        imgName: 'Washed Out',
                        link: 'http://google.com'
                    },
                    {
                        title: 'Hello Word 2',
                        date: '20/08/2016',
                        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique magna non gravida...</p>',
                        imgSrc: 'app/gallery-post/washedout.png',
                        imgName: 'Washed Out',
                        link: 'http://google.com'
                    },
                    {
                        title: 'Hello Word 1',
                        date: '20/08/2016',
                        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique magna non gravida...</p>',
                        imgSrc: 'app/gallery-post/washedout.png',
                        imgName: 'Washed Out',
                        link: 'http://google.com'
                    },
                    {
                        title: 'Hello Word 2',
                        date: '20/08/2016',
                        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique magna non gravida...</p>',
                        imgSrc: 'app/gallery-post/washedout.png',
                        imgName: 'Washed Out',
                        link: 'http://google.com'
                    }
                ]
            },
            {
                category: 'External Content',
                linkList:
                [
                    {
                        title: 'Hello Word 1',
                        date: '20/08/2016',
                        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique magna non gravida...</p>',
                        imgSrc: 'app/gallery-post/washedout.png',
                        imgName: 'Washed Out',
                        href: 'http://google.com'
                    },
                    {
                        title: 'Hello Word 2',
                        date: '20/08/2016',
                        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique magna non gravida...</p>',
                        imgSrc: 'app/gallery-post/washedout.png',
                        imgName: 'Washed Out',
                        href: 'http://google.com'
                    },
                    {
                        title: 'Hello Word 1',
                        date: '20/08/2016',
                        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique magna non gravida...</p>',
                        imgSrc: 'app/gallery-post/washedout.png',
                        imgName: 'Washed Out',
                        href: 'http://google.com'
                    },
                    {
                        title: 'Hello Word 2',
                        date: '20/08/2016',
                        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique magna non gravida...</p>',
                        imgSrc: 'app/gallery-post/washedout.png',
                        imgName: 'Washed Out',
                        href: 'http://google.com'
                    }
                ]
            }
        ]
    };

    return {
        $get: function() {
            return {
                post: post
            };
        }
    };
};

/* Provider Declaration */
angular.
    module('adalber.to').
        provider('$gallerypost', GalleryPostProvider);