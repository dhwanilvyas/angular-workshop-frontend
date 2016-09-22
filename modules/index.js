var app = angular.module('BookStore', [
  'ui.bootstrap',
  'ui.router'
]);

app.constant('API_BASE_URL', 'http://localhost:3000/api/');

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../../../templates/home.html'
    })
    .state('books', {
      url: '/books',
      templateUrl: '../../../templates/book.html'
    })
    .state('books.list', {
      url: '/list',
      templateUrl: '../../../templates/book-list.html',
      controller: 'BookingCtrl',
      controllerAs: 'vm'
    })
    .state('books.add', {
      url: '/add',
      templateUrl: '../../../templates/book-add.html',
      controller: 'AddBookController',
      controllerAs: 'vm'
    })
    .state('books.update', {
      url: '/update',
      templateUrl: '../../../templates/book-add.html',
      controller: 'UpdateBookController',
      controllerAs: 'vm',
      params: {book: null}
    });

  $urlRouterProvider.otherwise('/');

});
