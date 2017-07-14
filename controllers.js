(function () {
    'use strict';

angular.module('ChampionApp', []).
controller('driversController', function ($scope) {
    $scope.nameFilter = null;
    $scope.driversList = [
        {
            Driver: {
                givenName: 'Sebastian',
                familyName: 'Vettel'
            },
            points: 322,
            nationality: "German",
            Constructors: [
                { name: "Red Bull" }
            ]

        },

        {
            Driver: {
                givenName: 'Fernando',
                familyName: 'Alonsa'
            },
            points: 207,
            nationality: "Spanish",
            Constructors: [
                { name: "Ferrari" }
            ]

        }
    ];
    $scope.races = null;

    $scope.races = [
       {
           Location: "Germany",
           round: 322,
           raceName: "German",
           Results: [
               {
                   Constructor: {
                       name: "Red Bull"
                   },
                   grid: 225,
                   position:"1st"
               }
           ]

       },

 {
     Location: "New York",
     round: 322,
     raceName: "MRF",
     Results: [
         {
             Constructor: {
                 name: "Red Bull"
             },
             grid: 225,
             position: "2st"
         }
     ]

 }
    ];

    $scope.searchFilters = function (driver) {
        var keyword = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
    }

    $scope.message = "Hi Driver List";

    $scope.messages = "Hi Races list";

});

})();