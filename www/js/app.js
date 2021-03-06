// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('landing', {
      url: "/landing",
      templateUrl: "app/landing/landing.html",
      controller: 'LandingCtrl'
   })

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.account', {
    url: "/account",
    views: {
      'tab-account': {
        templateUrl: "app/account/account.html",
        controller: 'AccountCtrl'
      }
    }
  })

  .state('app.payments', {
    url: "/payments/{contact_id:int}",
    params: { 
        contact_id: {value: null, squash: true}
    },
    views: {
      'tab-payments': {
        templateUrl: "app/payments/payments.html",
        controller: 'PaymentsCtrl'
      }
    }
  })

  .state('app.contacts', {
    url: "/contacts",
    views: {
      'tab-contacts': {
        templateUrl: "app/contacts/contacts.html",
        controller: 'ContactsCtrl'
      }
    }
  })
  .state('app.playlists', {
    url: "/playlists",
    views: {
      'tab-playlists': {
        templateUrl: "templates/playlists.html",
        controller: 'PlaylistsCtrl'
      }
    }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/landing');
});
