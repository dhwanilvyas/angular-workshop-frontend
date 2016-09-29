var app = angular.module('BookStore');

app.controller('GenreBookController', function($scope, $state, GenreService) {

  $scope.add = function() {
    GenreService.add($scope.genre).then(function(response) {
      alert('Genre Added!');
      $state.go('books.list');
    }).catch(function(err) {
      console.log(err);
    });
  }
});
