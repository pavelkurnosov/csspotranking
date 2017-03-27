'use strict';

angular.module('app.biz').controller('SocialMediaController', function ($scope) {
    var vm = this;
    vm.socialWebsites = [
        {name: "Facebook"},
        {name: "Twitter"},
        {name: "Youtube"},
        {name: "Google+"},
        {name: "Pinterest"}
    ];

    vm.tops = [
        {title: "Top Posting", amount: 218, icon: "film"},
        {title: "Top Audience", amount: 218, icon: "users"},
        {title: "Top Viewed", amount: 218, icon: "eye"},
        {title: "Top Commented", amount: 78, icon: "comments"},
        {title: "Top Likes", amount: 30, icon: "facebook"},
        {title: "Top Shared", amount: 9, icon: "twitter"}
    ];

    vm.socialSummaries = [
        {title: "Twitter", amount: 332, icon: "facebook.png"},
        {title: "Facebook", amount: 240, icon: "twitter.png"},
        {title: "LinkedIn", amount: 74, icon: "youtube.png"},
        {title: "Google+", amount: 45, icon: "googleplus.png"},
        {title: "YouTube", amount: 290, icon: "pinterest.png"}
    ];

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

});