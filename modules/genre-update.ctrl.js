var app = angular.module('BookStore');

app.controller('UpdateGenreController', function($scope, $state, GenreService) {

  get();

  function get() {
    GenreService.get().then(function(response) {
      $scope.genres = response;
    }).catch(function() {
      alert("Something went wrong.");
    });
  }
  /**
  * Calls the book service to update a book
  */
  $scope.update = function(genre) {
    GenreService.update(genre).then(function() {
      alert('Updated!');
      $state.go('books.list');
    }).catch(function(err) {
      console.log(err);
    });
  }

});
