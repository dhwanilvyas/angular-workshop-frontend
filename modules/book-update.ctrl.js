var app = angular.module('BookStore');

app.controller('UpdateBookController', function($scope, $state, $stateParams, BookService) {

  $scope.book = $stateParams.book;

  $scope.update = function() {
    BookService.update($scope.book).then(function() {
      alert('Updated!');
      $state.go('books.list');
    }).catch(function(err) {
      console.log(err);
    });
  }

});
