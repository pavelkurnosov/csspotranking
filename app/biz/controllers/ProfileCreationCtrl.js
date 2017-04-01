'use strict';

angular.module('app.biz').controller('ProfileCreationController', function ($scope, $window) {
    var vm = this;

    vm.medias = ['Print', 'TV', 'Radio', 'Web', 'Outdoor', 'Indoor', 'Social Media', 'Business Printing', 'Email Marketing'];

    vm.cities = [{
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
    },{
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
    }];

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
});