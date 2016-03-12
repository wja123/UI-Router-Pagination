'use strict';

var app = angular.module('swApp');

app.service("SwapiService", function($http) {

    this.getNumPages = () => {
        
        $http.get("http://swapi.co/api/people/").then(res => {
          var tempArr =[];
          for(var i =1; i <= Math.ceil(res.data.count/10);i++){
            tempArr.push(i);
          }
            this.numPages = tempArr;
        }, err => {
            console.log("SwapiService Get Error!", err);
        });
    }

    this.getPeople = (pageNum) => {
        if (!pageNum) {
            pageNum = 1;
        }
        $http.get(`http://swapi.co/api/people/?page=${pageNum}`).then(res => {
            this.people = res.data.results;
        }, err => {
            console.log("SwapiService Get Error!", err);
        });
    }

    this.getPerson = () => {
        $http.get("http://swapi.co/api/people").then(res => {
            this.person = res.data.results;
        }, err => {
            console.log("SwapiService Get Error!", err);
        });
    }

});