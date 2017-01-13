angular.module('trimobile',  ['ui.router', 'ui.bootstrap'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home',{
            url:'/home',
            templateUrl: "../templates/home-tmpl.html",
            controller: "mainController"
        })
        .state('INICIO',{
            url:'/INICIO',
            templateUrl: "../templates/INICIO-tmpl.html",
            controller: "mainController"
        })
        .state('DIGITALES',{
            url:'/DIGITALES',
            templateUrl: "../templates/DIGITALES-tmpl.html",
            controller: "mainController"
        })


        $urlRouterProvider
            .otherwise('/');


    });
