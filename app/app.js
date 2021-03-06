'use strict';
angular.module('buzAnt', ['ngAnimate','ui.bootstrap','ui.router','mwl.calendar'])
  .constant('appConfig', {
    version: '0.0.1',
    API_NODE_KEY: 'ogGM_pzr3ybW',
    calendarView: 'week'
  });


angular.module('buzAnt').config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("tutor");  //default state url
  $stateProvider
    .state('tutorContainer', {
      //abstract: true,
      templateUrl: "app/partials/tutor.container.html",
      controller: 'TutorContainerController'
    })
    .state('userProfile', {
      parent: 'tutorContainer',
      url: "/profile",
      templateUrl: "app/partials/user.profile.html",
      controller: 'UserProfileController'
    })
    .state('tutorMain', {
      parent: 'tutorContainer',
      url: "/tutor",
      templateUrl: "app/partials/tutor.main.html",
      controller: 'TutorMainController'
    })
    .state('tutorCalendar', {
      parent: 'tutorMain',
      url: '/calendar',
      templateUrl: "app/partials/tutor.main.calendar.html"
    })
    .state('tutorCourse', {
      parent: 'tutorContainer',
      url: "/course",
      templateUrl: "app/partials/tutor.course.html",
      controller: 'TutorCourseController'
    });
})

.run(function($http, appConfig) {
  $http.defaults.headers.common.Authorization = appConfig.API_NODE_KEY;
});
