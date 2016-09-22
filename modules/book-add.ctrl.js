var app = angular.module('BookStore');

app.controller('AddBookController', function($scope, $state, BookService) {

  getGenres();

  /**
  * Gets the genre list from the book service
  */
  function getGenres() {
    BookService.getGenres().then(function(response) {
      $scope.genres = response;
    }).catch(function(err) {
      console.log(err);
    });
  }

  /**
  * Call the book service to add a book
  */
  $scope.add = function() {
    BookService.add($scope.book).then(function() {
      alert('Added!');
      $state.go('books.list');
    }).catch(function(err) {
      console.log(err);
    });
  }

});
