import * as angular from 'angular'
import '@uirouter/angularjs'

import BooksController from './controllers/books/books.controller'
import BooksService from './services/books.service'

// Route
import RouteConfig from './route'

angular
  .module('app', ['ui.router'])
  .config(RouteConfig)
  .controller('BooksController', BooksController)
  .service('BooksService', BooksService)
