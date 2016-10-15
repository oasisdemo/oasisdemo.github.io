/**
 * app.js
 * create by zhaotinghai at 20161015
 */
define(['angular', 'angularAMD', 'jquery', 'angular-ui-router', 'sprintf'],
function(angular, angularAMD, $){

    var app = angular.module('app', ['ui.router']);

    var URL_ROUTES = "init/z/route.json";
    var baseUrl = 'modules';
    var LANGUAGE = 'cn';

    app.config(config).run(run);

    angularAMD.bootstrap(app);

    return app;

    function config ($stateProvider, $urlRouterProvider, $controllerProvider) {
        console.log('app.config');
        $.ajax({
            type: "GET",
            url: URL_ROUTES,
            dataType: 'json',
            async: false
        }).
        success(success).
        fail(fail);

        function success(data) {

            $urlRouterProvider.when("", data.home);

            angular.forEach(data.routes, function(v, i) {
                var controller = sprintf('%s/controllers/%s', v.module, v.view);
                var templateUrl = sprintf('%s/%s/views/%s/%s.html', baseUrl, v.module, LANGUAGE, v.view);
                var state = ( (v.module == data.main)?"":data.state ) + v.state;
                
                $stateProvider.state(state, {
                    url : v.url,
                    templateUrl : templateUrl,
                    controller : state,
                    resolve : {
                        init: function($q, $rootScope) {
                            var deferred = $q.defer();
                            require([controller], function(controller) {
                                $controllerProvider.register(state, controller);
                                $rootScope.$apply(function() {
                                    deferred.resolve();
                                })
                            });
                            return deferred.promise;
                        }
                    }
                });
            });
        }

        function fail(data) {
            console.log(data);
            console.log("error");
        }
    }

    function run ($rootScope, $state, $http) {
        console.log('app.run')
    }
});
