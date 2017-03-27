'use strict';

angular.module('app.biz').controller('InventoryMapController', function () {
    var vm = this;


    vm.map = {
        center: {
            latitude: 48.815193,
            longitude: 2.37825
        },
        zoom: 3,
        control: {}
    };


});