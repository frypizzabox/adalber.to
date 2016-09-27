/* GalleryPostCtrl Declaration */
GalleryPostCtrl = function($scope, $gallerypost) {

    $scope.post = $gallerypost.post;
};

/* Controller Configuration */
angular.
    module('adalber.to').
        controller(
            'GalleryPostCtrl',
            ['$scope', '$gallerypost', GalleryPostCtrl]
        );