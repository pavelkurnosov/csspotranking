"use strict";


angular.module('app.biz', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.biz', {
                abstract: true,
                data: {
                    title: 'Biz'
                }
            })
            .state('app.biz.dashboard', {
                url: '/dashboard',
                data: {
                    title: 'Dashboard'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/dashboard.html',
                        controller: 'DashboardController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.profileCreation', {
                url: '/cs_profile_creation',
                data: {
                    title: 'CS Profile Creation'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/profile-creation.html',
                        controller: 'ProfileCreationController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.accountCreation', {
                url: '/cs_account_creation',
                data: {
                    title: 'CS Account Creation'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/account-creation.html',
                        controller: 'AccountCreationController',
                        controllerAs: 'vm'
                    }
                }
            })
        ;
    })
;
