'use strict';

var app = angular.module('swApp');


app.controller("peopleCtrl", function($scope, $state, $stateParams, SwapiService) {

    SwapiService.getPeople($stateParams.pageId);
    SwapiService.getNumPages();
    $scope.$watch(function() {
        return SwapiService.numPages;
    }, function(newVal, oldVal) {
        $scope.numPages = newVal;
    });

    $scope.$watch(function() {
        return $stateParams.pageId;
    }, function(newVal, oldVal) {
        SwapiService.getPeople(newVal);;
    });

    $scope.$watch(function() {
        return SwapiService.people;
    }, function(newVal, oldVal) {
        $scope.people = newVal;
    });

    $scope.userDetails = function() {
        $state.go('swPerson', {
            'personParam': this.person
        });
    }
});

app.controller("personCtrl", function($scope, $state, $stateParams, SwapiService) {
    $scope.personView = $stateParams.personParam;

});