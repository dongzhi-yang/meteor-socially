angular.module('socially').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
 
    $stateProvider
      .state('parties', {
        url: '/parties',
        template: '<parties-list></parties-list>'// '-' and cases will be ignored
      })
     .state('partyDetails', {
        url: '/parties/:partyId',
        template: '<party-details></party-details>'
      });

    $urlRouterProvider.otherwise("/parties");
  });