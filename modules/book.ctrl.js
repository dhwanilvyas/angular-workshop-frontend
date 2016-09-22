var app = angular.module('BookStore');

app.controller('BookingCtrl', function($scope, BookService, $state) {

  getData();

  function getData() {
    BookService.getData().then(function(response) {
      $scope.books = response;
    }).catch(function(err) {
      console.log(err);
    });
  }

  $scope.remove = function(book) {
    if (confirm('Sure to delete?')) {
      BookService.remove(book._id).then(function() {
        alert('Deleted!');
        getData();
      })
      .catch(function(err) {
        console.log(err);
      })
    } else {
      alert('Wise Decision!');
    }
  }

  $scope.isBookListEmpty = function() {
    if (!$scope.books) return false;

    return $scope.books.length ? false : true;
  }

  $scope.update = function(book) {
    $state.go('books.update', {
      book: book
    });
  }

});
