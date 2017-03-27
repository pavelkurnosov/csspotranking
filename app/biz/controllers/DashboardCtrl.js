'use strict';

angular.module('app.biz').controller('DashboardController', function () {
    var vm = this;
    vm.barChartData = [
        {
            "data": [[0, 3]],
            "bars": {"show": true, "barWidth": 1, "order": 1}
        }, {
            "data": [[0, 9]],
            "bars": {"show": true, "barWidth": 1, "order": 2}
        }, {
            "data": [[0, 5]],
            "bars": {"show": true, "barWidth": 1, "order": 3}
        }
    ];

    vm.pieChartData = [
        {"label": "McDonald's", "data": 8},
        {"label": "Burger King", "data": 40},
        {"label": "Pizza Hut", "data": 15}
    ];



});