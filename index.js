var app = angular.module('BookStore', [
  // Injecting dependencies
  'ui.bootstrap',
  'ui.router'
]);

// Constants are like global variables available throughout the application
// Set the API base URL
app.constant('API_BASE_URL', 'http://localhost:3000/api/');

app.config(function($stateProvider, $urlRouterProvider) {

  // Route config
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })
    .state('books', {
      url: '/books',
      templateUrl: 'templates/book.html',
			abstract: true
    })
    .state('books.list', {
      url: '/list',
      templateUrl: 'templates/book-list.html',
      controller: 'BookingCtrl'
    })
    .state('books.add', {
      url: '/add',
      templateUrl: 'templates/book-add.html',
      controller: 'AddBookController'
    })
    .state('books.genre', {
      url: '/genre',
      templateUrl: 'templates/genre-add.html',
      controller: 'GenreBookController'
    })
    .state('books.genreUpdate', {
      url: '/genre-update',
      templateUrl: 'templates/genre-update.html',
      controller: 'UpdateGenreController'
    })
    .state('books.update', {
      url: '/update',
      templateUrl: 'templates/book-add.html',
      controller: 'UpdateBookController',
      params: {book: null},
      // If there is no book object in the state param
      // then redirect to book list
      onEnter: function($stateParams, $state) {
        if (!$stateParams.book) {
					$state.go('books.list');
				}
      }
    });

  $urlRouterProvider.otherwise('/');

});
