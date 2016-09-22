var app = angular.module('BookStore');

app.controller('UpdateBookController', function($scope, $state, $stateParams, BookService) {

  // Assign the book received in the state params to the scope
  // to populate the book information in the form.
  $scope.book = $stateParams.book;

  /**
  * Calls the book service to update a book
  */
  $scope.update = function() {
    BookService.update($scope.book).then(function() {
      alert('Updated!');
      $state.go('books.list');
    }).catch(function(err) {
      console.log(err);
    });
  }

});
