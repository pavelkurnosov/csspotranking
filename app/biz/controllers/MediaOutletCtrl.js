'use strict';

angular.module('app.biz').controller('MediaOutletController', function (DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;

    vm.medias = [
        { title: "Print Media", image: "./styles/img/temp/1.jpg"},
        { title: "TV Channel", image: "./styles/img/temp/2.jpg"},
        { title: "FM Radio", image: "./styles/img/temp/3.jpg"}
    ];

    vm.standardOptions = DTOptionsBuilder
        .fromSource('app/biz/outlet_data.json')
        .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>t<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>")
        .withButtons([
            /*'columnsToggle',*/
            'colvis',
            'print',
            'copy',
            'pdf',
            'excel',
            'csv',
            {
                text: 'Report',
                key: '1',
                action: function (e, dt, node, config) {
                    alert('Report will be created.');
                }
            }
        ])
        .withBootstrap();

    vm.standardColumns = [
        DTColumnBuilder.newColumn('newspapers')/*.withClass('text-danger')*/,
        DTColumnBuilder.newColumn('country'),
        DTColumnBuilder.newColumn('lang'),
        DTColumnBuilder.newColumn('ymd'),
        DTColumnBuilder.newColumn('circulation'),
        DTColumnBuilder.newColumn('np_subject'),
        DTColumnBuilder.newColumn('ads_no'),
        DTColumnBuilder.newColumn('ad_np_section'),
        DTColumnBuilder.newColumn('ad_location')
    ];
});