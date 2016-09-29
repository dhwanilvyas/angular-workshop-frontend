var app = angular.module('BookStore');

app.service('GenreService', function($http, $q, API_BASE_URL) {

  return {
    get: get,
    add: add,
    update: update,
    delete: del
  };

  /**
  * Gets the book list from the api
  */
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

  /**
  * Calls the api to add genre
  */
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

  /**
  * Calls the api to update genre
  */
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

  /**
  * Calls the api to delete genre
  */
  function del(genre) {
    var defer = $q.defer();

    $http.delete(API_BASE_URL + 'genres/' + genre._id).then(function(response) {
      defer.resolve();
    }).catch(function(err) {
      console.log(err);
      defer.reject(err);
    });

    return defer.promise;
  }

});
