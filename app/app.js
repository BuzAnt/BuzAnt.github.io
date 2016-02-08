'use strict';
angular.module('buzAnt', ['ui.bootstrap','ui.router','angular-bootstrap-calendar'])
  .constant('appConfig', {
    version: '0.0.1'
  });

angular.module('buzAnt').config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("tutor");  //default state url
  $stateProvider
    .state('tutorContainer', {
      //abstract: true,
      templateUrl: "app/partials/tutor.container.html",
      controller: 'TutorContainerController'
    })
    .state('tutorMain', {
      parent: 'tutorContainer',
      url: "/tutor",
      templateUrl: "app/partials/tutor.main.html",
      controller: 'TutorMainController'
    })
    .state('tutorCalendar', {
      parent: 'tutor.main',
      url: '/calendar',
      templateUrl: "app/partials/tutor.main.calendar.html"
    })
    .state('tutorCourse', {
      parent: 'tutor.container',
      url: "/course",
      templateUrl: "app/partials/tutor.course.html",
      controller: 'TutorCourseController'
    });
});