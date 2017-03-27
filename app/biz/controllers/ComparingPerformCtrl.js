'use strict';

angular.module('app.biz').controller('ComparingPerformController', function () {
    var vm = this;
    vm.labels = ['Think BIG', 'Friendship', 'We are'];

    vm.sdate = "03/01/2017";
    vm.edate = "03/10/2017";

    vm.items = [
        {key: 'Campaign1', val: '76 spots'},
        {key: 'Television', val: '20 spots'},
        {key: 'Newspaper', val: '4 spots'},
        {key: 'Magazine', val: '5 spots'},
        {key: 'Radio', val: '33 spots'},
        {key: 'Online Display', val: '6 spots'},
        {key: 'Outdoor', val: '8 spots'}
    ];


    vm.data1 = {
        chart: {type: 'line', height: 170, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: ''},
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: ''
            }
        },
        yAxis: {title: {text: ''}},
        legend: {layout: 'vertical', align: 'right', verticalAlign: 'middle'},
        plotOptions: {series: {stacking: 'normal'}},
        series: [{
            name: 'Think BIG',
            // Define the data points. All series have a dummy year
            // of 1970/71 in order to be compared on the same x axis. Note
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            data: [
                [Date.UTC(2016, 6, 1), 190],
                [Date.UTC(2016, 6, 4), 130],
                [Date.UTC(2016, 6, 7), 115],
                [Date.UTC(2016, 6, 10), 155],
                [Date.UTC(2016, 6, 13), 230],
                [Date.UTC(2016, 6, 16), 145],
                [Date.UTC(2016, 6, 19), 143],
                [Date.UTC(2016, 6, 22), 148],
                [Date.UTC(2016, 6, 25), 150],
                [Date.UTC(2016, 6, 28), 170]
            ]
        }, {
            name: 'Friendship',
            // Define the data points. All series have a dummy year
            // of 1970/71 in order to be compared on the same x axis. Note
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            data: [
                [Date.UTC(2016, 6, 1), 200],
                [Date.UTC(2016, 6, 4), 70],
                [Date.UTC(2016, 6, 7), 65],
                [Date.UTC(2016, 6, 10), 85],
                [Date.UTC(2016, 6, 13), 130],
                [Date.UTC(2016, 6, 16), 85],
                [Date.UTC(2016, 6, 19), 33],
                [Date.UTC(2016, 6, 22), 178],
                [Date.UTC(2016, 6, 25), 210],
                [Date.UTC(2016, 6, 28), 70]
            ]
        }, {
            name: 'We are',
            // Define the data points. All series have a dummy year
            // of 1970/71 in order to be compared on the same x axis. Note
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            data: [
                [Date.UTC(2016, 6, 1), 200],
                [Date.UTC(2016, 6, 4), 70],
                [Date.UTC(2016, 6, 7), 65],
                [Date.UTC(2016, 6, 10), 85],
                [Date.UTC(2016, 6, 13), 130],
                [Date.UTC(2016, 6, 16), 85],
                [Date.UTC(2016, 6, 19), 33],
                [Date.UTC(2016, 6, 22), 178],
                [Date.UTC(2016, 6, 25), 210],
                [Date.UTC(2016, 6, 28), 70]
            ]
        }]
    };
    vm.data2 = {
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
    vm.data3 = {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }, height: 200, backgroundColor: 'rgba(255, 255, 255, 0.8)'
        },
        credits: {enabled: false},
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            showInLegend: false,
            type: 'pie',
            name: '',
            data: [
                ['Magazines', 28],
                ['Broadcast', 15],
                ['Newspapers', 57]
            ]
        }]
    };
});