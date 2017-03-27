'use strict';

angular.module('app.biz').controller('GeographicalCoverageController', function () {
    var vm = this;

    vm.data1 = {
        chart: {type: 'column', height: 200, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: ''},
        xAxis: {
            lineColor: 'black',
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        colors: ['#6b7889'],
        series: [{
            showInLegend: false,
            name: '',
            data: [1, 6, 7, 4, 3, 8, 0]
        }, {
            showInLegend: false,
            name: '',
            data: [2, 4, 2, 6, 1, 9, 4]
        }]
    };
});