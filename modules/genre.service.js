var app = angular.module('BookStore');

app.service('GenreService', function($http, $q, API_BASE_URL) {

  return {
    get: get,
    add: add,
    update: update
  };

  function get() {
    var defer = $q.defer();

    $http.get(API_BASE_URL + 'genres').then(function(response) {
      defer.resolve(response.data);
    }).catch(function(err) {
      console.log(err);
      defer.reject(err);
    });

    return defer.promise;
  }

  function add(genre) {
    var defer = $q.defer();

    $http.post(API_BASE_URL + 'genres', genre).then(function(response) {
      defer.resolve();
    }).catch(function(err) {
      console.log(err);
      defer.reject(err);
    });

    return defer.promise;
  }

  function update(genre) {
    var defer = $q.defer();

    $http.put(API_BASE_URL + 'genres/' + genre._id, genre).then(function(response) {
      defer.resolve();
    }).catch(function(err) {
      console.log(err);
      defer.reject(err);
    });

    return defer.promise;
  }

});
