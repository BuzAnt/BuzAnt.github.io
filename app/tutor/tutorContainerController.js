angular.module('buzAnt').controller('TutorContainerController', function($scope,$http,appConfig) {
  var dummyUser = {
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

  

  $http.get('https://buzant-node.herokuapp.com/users?email=' + 'xiangke.cao@gmail.com')//user.email) //xiangke.cao@gmail.com
    .then(function(response) {
      debugger;
      var users = response.data;
      $scope.user = users[0]  //TODO: handle duplicate emails
    })

  if ($scope.user && $scope.user.messages && $scope.user.messages.length > 0) {
    $scope.user.unreadMessages = $scope.user.messages.filter( message => message.read === false );
  }
});