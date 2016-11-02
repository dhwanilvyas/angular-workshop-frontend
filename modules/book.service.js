var app = angular.module('BookStore');

app.factory('BookService', function($http, $q, API_BASE_URL) {

  return {
    getData: getData,
    add: add,
    update: update,
    remove: remove,
    getGenres: getGenres
  };

  /**
  * Gets the book list from the API
  * @returns {object} A promise
  */
  function getData() {

		var defer = $q.defer();

    $http.get(API_BASE_URL + 'books').then(function(response) {
      defer.resolve(response.data);
    }).catch(function(err) {
      defer.reject(err);
      console.log(err);
    });

    return defer.promise;
  }

  /**
  * Calls the API to add a book
  * @returns {object} A promise
  */
  function add(book) {

		var defer = $q.defer();

    $http.post(API_BASE_URL + 'books', book).then(function(response) {
      defer.resolve();
    }).catch(function(err) {
      defer.reject(err);
      console.log(err);
    });

    return defer.promise;
  }

  /**
  * Calls the API to update a book
  * @returns {object} A promise
  */
  function update(book) {

		var defer = $q.defer();

    $http.put(API_BASE_URL + 'books/' + book._id, book).then(function(response) {
      defer.resolve();
    }).catch(function(err) {
      defer.reject(err);
      console.log(err);
    });

    return defer.promise;
  }

  /**
  * Calls the API to remove a book
  * @returns {object} A promise
  */
  function remove(book_id) {

    var defer = $q.defer();

    $http.delete(API_BASE_URL + 'books/' + book_id).then(function(response) {
      defer.resolve();
    }).catch(function(err) {
      defer.reject(err);
      console.log(err);
    });

    return defer.promise;

  }

  /**
  * Gets the genre list from the API
  * @returns {object} A promise
  */
  function getGenres() {

    var defer = $q.defer();

    $http.get(API_BASE_URL + 'genres').then(function(response) {
      defer.resolve(response.data);
    }).catch(function(err) {
      defer.reject(err);
      console.log(err);
    });

    return defer.promise;

  }

});
