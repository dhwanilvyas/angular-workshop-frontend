var app = angular.module('BookStore');

app.controller('GenreBookController', function($scope, $state, GenreService) {

  /**
  * Calls the genre service to add a genre
  */
  $scope.add = function() {
    GenreService.add($scope.genre).then(function(response) {
      alert('Genre Added!');
      $state.go('books.list');
    }).catch(function(err) {
      console.log(err);
    });
  }
});
