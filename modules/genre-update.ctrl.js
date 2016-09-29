var app = angular.module('BookStore');

app.controller('UpdateGenreController', function($scope, $state, GenreService) {

  get();

  /**
  * Gets the genre list from the genre service
  */
  function get() {
    GenreService.get().then(function(response) {
      $scope.genres = response;
    }).catch(function() {
      alert("Something went wrong.");
    });
  }
  /**
  * Calls the genre service to update a genre
  */
  $scope.update = function(genre) {
    GenreService.update(genre).then(function() {
      alert('Updated!');
      $state.go('books.list');
    }).catch(function(err) {
      console.log(err);
    });
  }

  /**
  * Calls the genre service to delete a genre
  */
  $scope.delete = function(genre) {
    GenreService.delete(genre).then(function() {
      alert('Deleted!');
      $state.go('books.list');
    }).catch(function(err) {
      console.log(err);
    });
  }

});
