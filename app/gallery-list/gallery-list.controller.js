/* GalleryListCtrl Declaration */
GalleryListCtrl = function($scope, $location, $gallerylist) {

    // Get List content list from provider
    var gallerylist = $gallerylist.list;
    var selectedCard = null;

    // Passing values to scope
    $scope.gallerylist = gallerylist;

    $scope.goToPage = function(id) {

        $location.path('/post/' + id);
    };
};

/* Controller Configuration */
angular.
    module('adalber.to').
        controller('GalleryListCtrl',
            [
                '$scope',
                '$location',
                '$gallerylist',
                GalleryListCtrl
            ]
        );