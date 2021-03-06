angular.module('buzAnt').controller('TutorContainerController', function($scope,$http,appConfig,$state) {
  var dummyUser = {  //TODO： move this to test cases
    "email": "xiangke.cao@gmail.com",
    "name": "Shawn",
    "messages": [
      {
        "_id": "0001",
        "read": false,
        "from": "welcome@BuzAnt.com",
        "title": "Welcome to BuzAnt community!"
      },
      {
        "_id": "0003",
        "read": true,
        "from": "communicate@BuzAnt.com",
        "title": "Your account is created"
      }
    ],
    "rating": 3
  }

  var userEmail = window.location.search.split("=")[1]
  $http.get('https://buzant-node.herokuapp.com/users?email=' + userEmail)
    .then(function(response) {
      var users = response.data;
      if ($scope.user && $scope.user.messages && $scope.user.messages.length > 0) {
        $scope.user.unreadMessages = $scope.user.messages.filter( message => message.read === false );
      }
      $scope.user = users[0]  //TODO: handle duplicate emails
    });

  $scope.logOut = function(user) {
    window.location='/';  //TODO: user user.email for session management
  };
  $scope.manageCourse = function(user) {
    //TODO: ?
    $state.go('tutorCourse');
  };
  $scope.manageProfile = function(user) {
    //TODO: ?
    $state.go('userProfile');
  };
});
