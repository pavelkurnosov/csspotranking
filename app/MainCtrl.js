'use strict';

angular.module('app').controller('MainController', function ($interval) {
    var vm = this;
    vm.dateTime = moment().format("dddd, MMMM Do YYYY, hh:mm:ss");
    $interval(function () {
        vm.dateTime = moment().format("dddd, MMMM Do YYYY, hh:mm:ss");
    }, 1000);
});
