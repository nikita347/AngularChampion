angular.module('ChampionApp', []).factory('APIservice', function ($http) {
    var API = {};
    API.getDrivers = function () {
        return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
        });
    }

    API.getDriverDetails = function (id) {
        return $http({
            method: 'JSONP',
            url:'http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
        })
    }

    ergastAPI.getDriverRaces = function (id) {
        return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/2013/drivers/' + id + '/results.json?callback=JSON_CALLBACK'
        });
    }

    return API;

})