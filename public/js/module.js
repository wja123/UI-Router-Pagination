'use strict';

var app = angular.module('swApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('swPeople', {
            url: "/:pageId",
            templateUrl: "/html/people.html",
            controller: "peopleCtrl"
        })
        .state('swPerson', {
            url: "/person/:personId",
            templateUrl: "/html/person.html",
            params:{'personParam' : null},
            controller: "personCtrl"
        })
    $urlRouterProvider.otherwise("/");

});

app.run(function(SwapiService) {
    SwapiService.getPeople();
});