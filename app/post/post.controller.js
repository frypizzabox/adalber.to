/* PostCtrl Declaration */
PostCtrl = function($scope, $post) {

    $scope.post = $post.post;

};

/* Controller Configuration */
angular.
    module('adalber.to').
        controller('PostCtrl', ['$scope', '$post', PostCtrl]);