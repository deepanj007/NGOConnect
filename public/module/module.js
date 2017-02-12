var module = angular.module('ngoConnect', ['ui.router','ui.bootstrap','ngStorage']);

module.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
        url: '^',
        views:{
            'header@':{
                templateUrl :'partials/header.tpl.html'
            },
            'main@':{
                templateUrl :'partials/basePage.tpl.html',
                controller : 'basePageController'
            }
        }
    }).state('ngoRegister', {
        url: '/ngoRegister',
        views:{
            'header@':{
                templateUrl :'partials/header.tpl.html'
            },
            'main@':{
                templateUrl :'partials/ngoRegister.tpl.html'
            }
        }
    }).state('event', {
        url: '/event',
        views:{
            'header@':{
                templateUrl :'partials/header.tpl.html'
            },
            'main@':{
                templateUrl :'partials/event.tpl.html'
            }
        }
    }).state('initiateEvent', {
        url: '/initiateEvent',
        views:{
            'header@':{
                templateUrl :'partials/header.tpl.html'
            },
            'main@':{
                templateUrl :'partials/initiateEvent.tpl.html'
            }
        }
    }).state('profile', {
        url: '/profile',
        views:{
            'header@':{
                templateUrl :'partials/header.tpl.html'
            },
            'main@':{
                templateUrl :'partials/profile.tpl.html'
            }
        }
    }).state('volenteers', {
        url: '/volenteers',
        views:{
            'header@':{
                templateUrl :'partials/header.tpl.html'
            },
            'main@':{
                templateUrl :'partials/volenteers.tpl.html'
            }
        }
    });
    $urlRouterProvider.otherwise('home');

})