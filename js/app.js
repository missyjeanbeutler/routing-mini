angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'js/home/home.html',
            controller: 'homeCtrl'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'js/settings/settings.html',
            controller: 'settingsCtrl'
        })
        .state('products', {
            url: '/products/:id',
            templateUrl: '/js/products/products.html',
            controller: 'productsCtrl'
        })

        $urlRouterProvider.otherwise('/')
})