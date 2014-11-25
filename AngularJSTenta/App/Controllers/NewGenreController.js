function NewGenreController($scope, $http) {
    $scope.SaveNewGenre = function () {
        $http.post("/odata/Genres", $scope.NewGenre)
        .success(alert("Saved successfully"))

    }
}