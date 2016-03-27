angular.module('buzAnt').controller('UserProfileController', function($scope,appConfig,moment,alert) {
  var dummyEvents = [
      {
        title: 'A sample course',
        type: 'warning',
        startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
        endsAt: moment().startOf('week').subtract(1, 'days').add(8, 'hours').toDate(),
        draggable: true,
        resizable: true
      }, {
        title: 'Another course',
        type: 'info',
        startsAt: moment().add(1, 'day').toDate(),
        endsAt: moment().add(1, 'days').add(8, 'hours').toDate(),
        draggable: true,
        resizable: true
      }, {
        title: 'A repeating course',
        type: 'important',
        startsAt: moment().startOf('day').add(7, 'hours').toDate(),
        endsAt: moment().startOf('day').add(19, 'hours').toDate(),
        recursOn: 'month',
        draggable: true,
        resizable: true
      }
    ];

  $scope.calendarView = appConfig.calendarView;
  $scope.viewDate = new Date();


  $scope.events = dummyEvents;

  $scope.isCellOpen = true;

    $scope.eventClicked = function(event) {
      alert.show('Clicked', event);
    };

    $scope.eventEdited = function(event) {
      alert.show('Edited', event);
    };

    $scope.eventDeleted = function(event) {
      alert.show('Deleted', event);
    };

    $scope.eventTimesChanged = function(event) {
      alert.show('Dropped or resized', event);
    };

    $scope.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();
      event[field] = !event[field];
    };
});
