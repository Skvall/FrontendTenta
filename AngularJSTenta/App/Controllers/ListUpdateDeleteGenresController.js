function ListUpdateDeleteGenresController($scope, $http) {
    GetGenres();

    $scope.UpdateGenre = function (Genre) {
        $http.put("/odata/Genres(" + Genre.GenreId + ")", Genre).success(function () {
            alert("Updated");
            GetGenres();
        })
    }

    $scope.DeleteGenre = function (id) {
        $http.delete("/odata/Genres(" + id + ")").success(function () {
            alert("Deleted");
            GetGenres();
        })
    }

    function GetGenres() {
        $http.get("/odata/Genres").success(function (data, status) {
            $scope.Genres = data.value;
        })
    }
}

