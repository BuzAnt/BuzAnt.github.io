angular.module('buzAnt').controller('TutorCourseController', function($scope, appConfig) {
  $scope.calendar = {
    //TODO: replace this
    email: 'xiangke.cao@gmail.com',
    emails: [
      {
        '_id': '0001',
        'read': false,
        'from': 'welcome@BuzAnt.com',
        'title': 'Welcome to BuzAnt community!'
      },
      {
        '_id': '0003',
        'read': false,
        'from': 'communicate@BuzAnt.com',
        'title': 'Your account is created'
      }
    ]
  }
});