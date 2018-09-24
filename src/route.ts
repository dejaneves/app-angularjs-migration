import { StateProvider, UrlRouterProvider } from '@uirouter/angularjs'

export default class RouteConfig {
  constructor ($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) {

    $stateProvider
      .state('home', {
        name: 'home',
        url: '/home',
        templateUrl: './src/pages/home.html',
        controller: 'BooksController as vm'
      })
      .state('about', {
        name: 'about',
        url: '/about',
        templateUrl: './src/pages/about.html'
      })
      .state('contact', {
        name: 'contact',
        url: '/contact',
        templateUrl: './src/pages/contact.html'
      })
      $urlRouterProvider.otherwise('/home')
  }
}
