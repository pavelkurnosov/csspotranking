(function () {
    'use strict';

    angular.module('app.biz')
        .factory('ProfileService', ['$http', '$q', 'ServerURL', function ($http, $q, ServerURL) {
            return {
                get: function () {
                    var url = ServerURL + 'sports';
                    var deferred = $q.defer();
                    $http.get(url).then(function (res) {
                        deferred.resolve(res);
                    }, function (err) {
                        deferred.reject(err);
                    });
                    return deferred.promise;
                },
                create: function (data) {
                    var url = ServerURL + 'create_client';
                    var deferred = $q.defer();
                    $http({
                        method: 'POST',
                        url: url,
                        headers: { 'Content-Type': 'application/json; charset=UTF-8'},
                        data: data
                    }).then(function (res) {
                        deferred.resolve(res);
                    }, function (err) {
                        deferred.reject(err);
                    });
                    return deferred.promise;
                },
                delete: function (rowId) {
                    var deferred = $q.defer();
                    var url = ServerURL + 'sports?id=' + rowId;
                    $http.delete(url).then(function (res) {
                        deferred.resolve(res);
                    }, function (err) {
                        deferred.reject(err);
                    });
                    return deferred.promise;
                },
            };
        }]);
})();