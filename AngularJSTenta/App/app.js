var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/',
        {
            templateUrl: "/App/Partials/ListUpdateDeleteGenres.html",
            controller: "ListUpdateDeleteGenresController"
        })
    .when('/New',
        {
            templateUrl: "/App/Partials/NewGenre.html",
            controller: "NewGenreController"
        });
});

app.controller('ListUpdateDeleteGenresController', ListUpdateDeleteGenresController)
    .controller('NewGenreController', NewGenreController);