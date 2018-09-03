import * as angular from 'angular'
import '@uirouter/angularjs'

// Route
import RouteConfig from './route'

angular
  .module('app', ['ui.router'])
  .config(RouteConfig)
