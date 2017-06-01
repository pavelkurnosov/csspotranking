'use strict';

angular.module('app.biz').controller('ProfileCreationController', function ($scope, $window, ProfileService, SummaryService, BillingService) {
    var vm = this;
    vm.data = {
        "user_name": "",
        "password": "",
        "company_name": "",
        "confirm_password": "",
        "email": "",
        "direct_contact": "",
        "phone": "",
        "address": "",
        "city": "",
        "state": "",
        "country": "",
        "organization_affiliate": "",
        "website": "",
        "reseller": "1",
        "reseller_name": "",
        "reseller_id": "",
        "reseller_email": "",
        "reseller_direct_contact": "",
        "reseller_phone": ""
    };

    vm.clientData = {
        "client_id": "2",
        "category_id": "1",
        "subcategory_id": "1",
        "company_name": "BDDDD",
        "competitor": "2,3,4",
        "tag_id": "1,2,3",
        "media_id": "5,6,7"
    };

    var now = new Date();
    vm.billData = {
        "start_date": now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear(),
        "end_date": now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear()
    };

    vm.medias = ['Print', 'TV', 'Radio', 'Web', 'Outdoor', 'Indoor', 'Social Media', 'Business Printing', 'Email Marketing'];

    vm.cities = [
        {
            id: 1,
            title: "United Arap Emirates",
            medias: [{
                id: 11, title: "Abu Dhabi Radio", icon: ""
            }, {
                id: 12, title: "Abu Dhabi TV", icon: ""
            }, {
                id: 13, title: "Ajman Channel 4 FM", icon: ""
            }, {
                id: 14, title: "Al Arabiya", icon: ""
            }, {
                id: 15, title: "Al Arabiya 99.0", icon: ""
            }, {
                id: 16, title: "City 7 TV", icon: ""
            }]
        }, {
            id: 2,
            title: "Turkey",
            medias: [{
                id: 21, title: "Abu Dhabi Radio", icon: ""
            }, {
                id: 22, title: "Abu Dhabi TV", icon: ""
            }, {
                id: 23, title: "Ajman Channel 4 FM", icon: ""
            }, {
                id: 24, title: "Al Arabiya", icon: ""
            }, {
                id: 25, title: "Al Arabiya 99.0", icon: ""
            }, {
                id: 26, title: "City 7 TV", icon: ""
            }]
        }
    ];

    vm.competitors = [1, 2, 3];
    vm.addCompetitor = function () {
        vm.competitors[vm.competitors.length] = vm.competitors.length + 1;
    };

    vm.tag_id = ['Tag1', 'Tag2'];

    vm.monitoringInputs = [
        {
            id: 1, name: "Monitoring Traditional Media",
            childs: [
                {id: 1, name: "Newspaper"},
                {id: 1, name: "Magazine"},
                {id: 1, name: "TV"},
                {id: 1, name: "Broadcast Content Detection 24/7"},
                {id: 1, name: "My social"},
                {id: 1, name: "Out of Home"}
            ]
        }, {
            id: 2, name: "Digital Media",
            childs: [
                {
                    id: 1, name: "Social CORE NETWORKS & Competitive Analysis",
                    childs: [
                        {id: 1, name: "Cross-Channel"},
                        {id: 1, name: "Facebook"},
                        {id: 1, name: "Twitter"},
                        {id: 1, name: "Instagram"},
                        {id: 1, name: "YouTube"},
                        {id: 1, name: "LinkedIn"},
                        {id: 1, name: "Google+"},
                        {id: 1, name: "Pinterest"}
                    ]
                }, {
                    id: 2, name: "Digital Analytic / Desktop",
                    childs: [
                        {id: 1, name: "My Web Traffic Analytic & Competitions"},
                        {id: 1, name: "Google Analytics reporting"},
                        {id: 1, name: "Keyword Research SEO"},
                        {id: 1, name: "SEM Insight & Competitions"},
                        {id: 1, name: "Display Advertising"}
                    ]
                }, {
                    id: 3, name: "Digital Analytic / Mobile&Tablet"
                }
            ]
        }
    ];

    vm.measuringOutputs = [
        {id: 1, label: "My campaign", name: "My Insight"},
        {id: 1, label: "Organization Performance", name: "Brand vs Competitions"},
        {id: 1, label: "Reporting Tools", name: ""},
        {id: 1, label: "Alerting Service", name: ""}
    ];

    vm.chk = {};
    vm.popupVisible = false;
    vm.showPopup = function (ind) {
        vm.popupVisible = false;
        if (vm.chk[ind]) {
            vm.popupVisible = true;
            $('.selector-popup').css({
                left: (event.clientX - 120),
                top: (event.clientY + $window.scrollY - 100)
            });
        }
    };

    vm.saveProfile = function () {
        $scope.loading = true;
        var data = vm.data;
        ProfileService.create(data).then(function (response) {
            console.log(response)
        });
    };
    vm.saveSummary = function () {
        $scope.loading = true;
        var data = vm.clientData;
        SummaryService.create(data).then(function (response) {
            console.log(response)
        });
    };
    vm.saveBill = function () {
        $scope.loading = true;
        var data = vm.billData;
        BillingService.create(data).then(function (response) {
            console.log(response)
        });
    };
});