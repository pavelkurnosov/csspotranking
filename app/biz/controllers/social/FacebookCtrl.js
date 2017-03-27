'use strict';

angular.module('app.biz').controller('FacebookController', function ($state) {
    var vm = this;

    vm.socialPages = [
        {id: 1, title: 'Cross-Channel', url: 'crossChannels'},
        {id: 2, title: 'Twitter', url: 'socialTwitter'},
        {id: 3, title: 'Facebook', url: 'socialFacebook'},
        {id: 4, title: 'LinkedIn', url: 'socialLinkedin'},
        {id: 5, title: 'Google+', url: 'socialGoogleplus'},
        {id: 6, title: 'YouTube', url: 'socialYoutube'},
        {id: 7, title: 'Instagram', url: 'socialInstagram'}
    ];
    vm.openPage = function (url) {
        $state.go('app.biz.' + url);
    };

    vm.data1 = {
        chart: {type: 'bar', height: 170, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'As of Aug 18, 2015'},
        xAxis: {
            lineColor: 'black', categories: [
                'Social Audience',
                'Eat24'
            ]
        },
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#65c1ee', '#294a83', '#b03b2f', '#eb4349', '#4d7ea3'],
        series: [{
            name: 'Twitter',
            data: [130, 100]
        }, {
            name: 'Facebook',
            data: [40, 12]
        }, {
            name: 'Google+',
            data: [5, 8]
        }, {
            name: 'YouTube',
            data: [7, 0]
        }, {
            name: 'Instagram',
            data: [20, 10]
        }]
    };
    vm.data2 = vm.data1;
    vm.data3 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'As of Aug 18, 2015'},
        xAxis: {
            lineColor: 'black', categories: [
                'GrubHub',
                'Postmates',
                '<span style="color: black; font-weight: bold;">Eat24</span>',
                'Munchery',
                'BiteSquad',
                'UberEATS'
            ]
        },
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#65c1ee', '#294a83', '#b03b2f', '#eb4349', '#4d7ea3'],
        series: [{
            name: 'Twitter',
            data: [130, 100, 40, 23, 43, 10]
        }, {
            name: 'Facebook',
            data: [40, 12, 20, 3, 45, 2]
        }, {
            name: 'Google+',
            data: [5, 8, 9, 5, 6, 4]
        }, {
            name: 'YouTube',
            data: [7, 0, 3, 4, 5, 6]
        }, {
            name: 'Instagram',
            data: [20, 10, 9, 8, 7, 7]
        }]
    };
    vm.data4 = {
        chart: {type: 'bar', height: 200, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'Who has the top 50 Posts?'},
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
    vm.data5 = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie', height: 200, backgroundColor: 'rgba(255, 255, 255, 0.8)'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: 'What type of Posts were they?'
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
    vm.data6 = {
        chart: {type: 'column', height: 200, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'When were they Posted?'},
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
    vm.data7 = {
        chart: {type: 'line', height: 170, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        title: {text: ''},
        subtitle: {text: ''},
        xAxis: {type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }},
        yAxis: {title: {text: ''}},
        legend: {layout: 'vertical', align: 'right', verticalAlign: 'middle'},
        plotOptions: {series: {stacking: 'normal'}},
        series: [{
            name: 'Eat24',
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
        }]
    };


    vm.data11 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'As of Aug 18, 2015'},
        xAxis: {
            lineColor: 'black', categories: [
                'Mercedes-Benz',
                'BMW',
                'Ferrari',
                'Nissan USA',
                'Lamborghini',
                'MINI USA',
                'Porsche(North America)',
                'Audi USA',
                'Mazda USA',
                'Hyundai USA',
                'Tesla Motors',
                'Fiat USA',
                'Chrysler',
                'Scion'
            ]
        },
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#69788d'],
        series: [{
            showInLegend: false,
            name: 'Twitter',
            data: [19, 19, 16, 13, 12, 11, 10, 9, 1.9, 1.7, 1, 0.8, 0.851, 0.23]
        }]
    };
    vm.data12 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'Aug 18, 2015 vs. Jul 19, 2015'},
        xAxis: {
            lineColor: 'black', categories: [
                'Tesla Motors',
                'Nissan USA',
                'Chevrolet',
                'Toyota',
                'Honda',
                'Mercedes-Benz',
                'Mazda USA',
                'Chrysler',
                'Ford',
                'Cadillac',
                'Jeep',
                'Porsche(North America)',
                'Lamborghini',
                'Dodge'
            ]
        },
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#69788d'],
        series: [{
            showInLegend: false,
            name: '',
            data: [5, 2.15, 1.32, 1.0, 0.96, 0.93, 0.82, 0.74, 0.65, 0.53, 0.51, 0.51, 0.5, 0.46]
        }]
    };
    vm.data13 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'Aug 18, 2015 vs. Jul 19, 2015'},
        xAxis: {
            lineColor: 'black', categories: [
                'Dodge',
                'Jeep',
                'Mercedes-Benz',
                'Fiat USA',
                'Ferrari',
                'BMW',
                'Tesla Motors',
                'Audi USA',
                'Scion',
                'Nissan USA',
                'Chrysler',
                'Lamborghini',
                'Honda',
                'Toyota',
            ]
        },
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#69788d'],
        series: [{
            showInLegend: false,
            name: '',
            data: [2.97, 2.73, 2.63, 2.43, 2.07, 1.93, 1.87, 1.8, 1.57, 1.53, 1.47, 1.47, 1.33, 1.3]
        }]
    };
    vm.data14 = vm.data13;
    vm.data15 = {
        chart: {
            type: 'line', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'
        },
        title: {text: ''},
        subtitle: {text: 'Aug 18, 2015 vs. Jul 19, 2015'},
        xAxis: {
            categories: ['07/21', '07/24', '07/27', '07/30', '08/02', '08/05', '08/08', '08/11', '08/14', '08/14']
        },
        yAxis: {
            title: {
                text: 'Facebook Post Engagement Rate'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [
            {
                name: 'Audi USA',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Cadillac',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Chrysler',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Dodge',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Flat USA',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Honda',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Jeep',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Kia',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Mazda USA',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Mercedes-Benz',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Nissan USA',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Scion',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Subaru',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Tesla Motors',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Volkswagen USA',
                data: [0, 1, 2, 4, 2, 6, 2, 0, 1, 2, 3, 2],
                dataLabels: false
            }
        ]
    };
    vm.data16 = vm.data15;
    vm.data17 = vm.data13;
    vm.data18 = vm.data11;
    vm.data19 = {
        chart: {
            type: 'scatter',
            zoomType: 'xy', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'
        },
        credits: {enabled: false},
        title: {
            text: ''
        },
        subtitle: {
            text: 'Jul 20, 2015 - Aug 18, 2015'
        },
        xAxis: {
            title: {
                enabled: true,
                text: ''
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Facebook Average<br/>Engagement Total per Post'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 100,
            y: 70,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    // pointFormat: '{point.x} cm, {point.y} kg'
                }
            }
        },
        series: [{
            name: 'Lamborghini',
            color: 'rgba(223, 83, 83, .5)',
            data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]]

        }, {
            name: 'Fiat USA',
            color: 'rgba(119, 152, 191, .5)',
            data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
                [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
                [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
                [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
                [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
                [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
                [180.3, 83.2], [180.3, 83.2]]
        }]
    };
    vm.data21 = {
        chart: {type: 'column', height: 200, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        title: {text: ''},
        subtitle: {text: ''},
        xAxis: {categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],crosshair: true},
        yAxis: {min: 0,title: {text: 'Rainfall (mm)'            }},
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {column: {pointPadding: 0.2,borderWidth: 0}},
        series: [{
            showInLegend: false,
            name: '',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }]
    };
    vm.data22 = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie', height: 200, backgroundColor: 'rgba(255, 255, 255, 0.8)'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: 'DEMOGRAPHICS'
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
        series: [{showInLegend: false,
            name: '',
            colorByPoint: true,
            data: [{
                name: 'US',
                y: 74000
            },{
                name: 'DE',
                y: 22000
            },{
                name: 'CA',
                y: 21000
            },{
                name: 'IT',
                y: 18000
            },{
                name: 'Other',
                y: 133000
            }]
        }]
    };
    vm.data23 = {
        chart: {
            type: 'column', height: 200, backgroundColor: 'rgba(255, 255, 255, 0.8)'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: 'PEOPLE YOU REACHED'
        },
        xAxis: {
            categories: ['1', '2', '3', '4', '5']
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Jane',
            data: [2, -2, -3, 2, 1]
        }, {
            name: 'Joe',
            data: [3, 4, 4, -2, 5]
        }]
    };
});

function getRandomArray(cnt) {
    var ary = [];
    for (var i = 0; i < cnt; i++) {
        ary[ary.length] = Math.random();
    }
    return ary;
};