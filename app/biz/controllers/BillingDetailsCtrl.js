'use strict';

angular.module('app.biz').controller('BillingDetailsController', function ($scope, $window) {
    var vm = this;
    vm.chartdata = {
        chart: {height: 300},
        title: {text: 'Data Usage'},
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        series: [{
            showInLegend: false,
            name: '',
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        },{
            showInLegend: false,
            name: '',
            data: [19.9, 75.5, 66.4, 49.2, 34.0, 86.0, 75.6, 48.5, 26.4, 134.1, 15.6, 44.4]
        }]
    };
});