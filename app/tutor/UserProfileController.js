angular.module('buzAnt').controller('UserProfileController', function($scope, $http) {
  //user object in inherited from parent
  $scope.profile = {};
  $scope.fetchUserProfile = function(user) {
    $http.get('https://buzant-node.herokuapp.com/user_info/' + user.email)
      .then(function(response) {
        var user = response.data[0];
      });
  };
  $scope.saveProfile = function(user) {
    $http.put('https://buzant-node.herokuapp.com/userinfo/' + user.email)
      .then(function(response) {
        user = response.data;
      })
  };
  $scope.resetProfile = function(user) {
    $scope.fetchUserProfile(user)
  }
});
