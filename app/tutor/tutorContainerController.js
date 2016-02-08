angular.module('buzAnt').controller('TutorContainerController', function($scope, appConfig) {
  var dummyUser = {
    email: 'xiangke.cao@gmail.com',
    messages: [
      {
        '_id': '0001',
        'read': false,
        'from': 'welcome@BuzAnt.com',
        'title': 'Welcome to BuzAnt community!'
      },
      {
        '_id': '0003',
        'read': true,
        'from': 'communicate@BuzAnt.com',
        'title': 'Your account is created'
      }
    ],
    rating: 3


  }

  $scope.user = dummyUser;

  if ($scope.user.messages || $scope.user.messages.length > 0) {
    $scope.user.unreadMessages = $scope.user.messages.filter( message => message.read === false );
  }
});