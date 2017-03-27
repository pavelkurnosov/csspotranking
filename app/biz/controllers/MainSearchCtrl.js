'use strict';

angular.module('app.biz').controller('MainSearchController', function ($window) {
    var vm = this;

    vm.fixedSummaryDiv = false;
    vm.checks = [];
    vm.extendTableVisible = [];

    vm.dates4 = { startDate: moment().subtract(1, 'day'), endDate: moment().subtract(1, 'day') };
    vm.ranges = {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
        'Last 7 days': [moment().subtract('days', 7), moment()],
        'Last 30 days': [moment().subtract('days', 30), moment()],
        'This month': [moment().startOf('month'), moment().endOf('month')]
    };

    vm.backToTop = function () {
        document.body.scrollTop = 0;
    };


    angular.element($window).bind("scroll", function () {
        vm.fixedSummaryDiv = document.body.scrollTop > 50;
    });

});