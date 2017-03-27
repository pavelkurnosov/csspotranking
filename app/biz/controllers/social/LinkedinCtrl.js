'use strict';

angular.module('app.biz').controller('LinkedinController', function () {
    var vm = this;
    vm.data1 = {
        chart: {type: 'bar', height: 140, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'Followers'},
        xAxis: {lineColor: 'black', categories: ['Tesla Motors', 'Landscape Average']},
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#e34748'],
        series: [{
            showInLegend: false,
            name: 'Twitter',
            data: [113, 120]
        }]
    };
    vm.data2 = {
        chart: {type: 'bar', height: 140, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'All Tweets'},
        xAxis: {lineColor: 'black', categories: ['Tesla Motors', 'Landscape Average']},
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#e34748'],
        series: [{
            showInLegend: false,
            name: 'Twitter',
            data: [705, 586]
        }]
    };
    vm.data3 = {
        chart: {type: 'bar', height: 140, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'Engagement Total'},
        xAxis: {lineColor: 'black', categories: ['Tesla Motors', 'Landscape Average']},
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#e34748'],
        series: [{
            showInLegend: false,
            name: 'Twitter',
            data: [705, 586]
        }]
    };
    vm.data4 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'Jun 5, 2015 - jun 11, 2015'},
        xAxis: {lineColor: 'black', categories: ['Prestashop', 'Volusion', 'Shopify', 'Bigcommerce', '3dcart', '<span style="color:black;font-weight: bold;">WooCommerce</span>', 'Pinnacle Cart', 'X-Cart', 'UltraCart', 'Elastic Path', 'Magento', 'CubeCart']},
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#6b7889'],
        series: [{
            showInLegend: false,
            name: 'Retweets',
            data: [130, 100, 52, 35, 26, {y:18, color: '#64b0ec'}, 10, 8, 4, 3, 3, 1]
        }]
    };
    vm.data5 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'Jun 5, 2015 - jun 11, 2015'},
        xAxis: {lineColor: 'black', categories: ['Prestashop', 'Volusion', 'Shopify', 'Bigcommerce', '3dcart', '<span style="color:black;font-weight: bold;">WooCommerce</span>', 'Pinnacle Cart', 'X-Cart', 'UltraCart', 'Elastic Path', 'Magento', 'CubeCart']},
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#6b7889'],
        series: [{
            showInLegend: false,
            name: 'Retweets',
            data: [130, 100, 52, 35, 26, {y:18, color: '#64b0ec'}, 10, 8, 4, 3, 3, 1]
        }]
    };
    vm.data6 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'Jun 5, 2015 - jun 11, 2015'},
        xAxis: {lineColor: 'black', categories: ['Prestashop', 'Volusion', 'Shopify', 'Bigcommerce', '3dcart', '<span style="color:black;font-weight: bold;">WooCommerce</span>', 'Pinnacle Cart', 'X-Cart', 'UltraCart', 'Elastic Path', 'Magento', 'CubeCart']},
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#6b7889'],
        series: [{
            showInLegend: false,
            name: 'Retweets',
            data: [130, 100, 52, 35, 26, {y:18, color: '#64b0ec'}, 10, 8, 4, 3, 3, 1]
        }]
    };
    vm.data7 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'Who has the top 50 posts?'},
        xAxis: {
            lineColor: 'black',
            categories: ['Porsche(North America)', 'Mazda USA', 'Mitsubishi Motors', 'Mercedes-Benz', 'Kia']
        },
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#6b7889'],
        series: [{
            showInLegend: false,
            name: '',
            data: [7, 6, 6, 4, 4]
        }]
    };
    vm.data8 = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: 'What type of posts were they?'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Video',
                y: 100
            }]
        }]
    };
    vm.data9 = {
        chart: {type: 'column', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'When were they posted?'},
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
            data: [1, 6, 7, 10, 18, 8, 0]
        }]
    };
});
