angular.module('ChampionApp', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when("scripts/drivers", { templateUrl: "partials/drivers.html", controller: "driversController" }).
    when("scripts/drivers/:id", { templateUrl: "partials/driver.html", controller: "driversController" }).
    otherwise({ redirectTo: 'scripts/drivers' });
}])