define(['angular', 'require', 'angular-ui-router'], function (angular, require) {

    var app = angular.module('webapp', [
        'ui.router'
    ]);

    var MODULE_MAIN = 'z';
    var STATE_MODULE_ROOT = "z.z";

    var ROUTES = [
        {
            "module":"z",
            "state": "z",
            "url": "/z",
            "view": "z"
        },
        {
            "module":"z",
            "state": "z.z",
            "url": "/z",
            "view": "z.z"
        },
        {
            "module":"locate",
            "state": "locate",
            "url": "/locate",
            "view": "index",
        },
        {
            "module":"canvas",
            "state": "canvas",
            "url": "/canvas",
            "view": "index",
        }
    ];

    app.config(function($stateProvider, $urlRouterProvider, $controllerProvider) {
        $urlRouterProvider.otherwise('/test/list');
        $stateProvider.
            state('test', {
                url:'/test',
                templateUrl: 'modules/test/index.html',
                controller: 'controller.test.index',
                resolve: {
                    /*
                    这个key值会被注入到controller中，对应的是后边这个function返回的值，或者promise最终resolve的值。函数的参数是所需的服务，angular会根据参数名自动注入
                     对应controller写法（注意keyName）：
                     controllers.controller('module2Controller', ['$scope', '$http', 'keyName',
                         function($scope, $http, keyName) {
                     }]);
                     */
                    keyName: function ($q) {
                        var deferred = $q.defer();
                        require(['modules/test/index.js'], function (controller) {
                            //由于是动态加载的controller，所以要先注册，再使用
                            $controllerProvider.register('controller.test.index', controller);
                            deferred.resolve();
                        });
                        return deferred.promise;
                    }
                }
            }).
            state('test.list', {
                url:'/list',
                templateUrl: 'modules/test/list.html',
                controller: 'controller.test.list',
                resolve: {
                    init: function ($q) {
                        var deferred = $q.defer();
                        require(['modules/test/list.js'], function (controller) {
                            $controllerProvider.register('controller.test.list', controller);
                            deferred.resolve();
                        });
                        return deferred.promise;
                    }
                }
            }).
            state('test.detail', {
                url:'/detail/{id:[0-9]{1,10}}',
                templateUrl: 'modules/test/detail.html',
                controller: 'controller.test.detail',
                resolve: {
                    init: function ($q) {
                        var deferred = $q.defer();
                        require(['modules/test/detail.js'], function (controller) {
                            $controllerProvider.register('controller.test.detail', controller);
                            deferred.resolve();
                        });
                        return deferred.promise;
                    }
                }
            }).
            state('/', {
                url:'/locate',
                templateUrl: 'modules/locate/index.html',
                controller: 'controller.locate.index',
                resolve: {
                    init: function ($q) {
                        var deferred = $q.defer();
                        require(['modules/locate/index.js'], function (controller) {
                            $controllerProvider.register('controller.locate.index', controller);
                            deferred.resolve();
                        });
                        return deferred.promise;
                    }
                }
            }).
            state('locate', {
                url:'/locate',
                templateUrl: 'modules/locate/index.html',
                controller: 'controller.locate.index',
                resolve: {
                    init: function ($q) {
                        var deferred = $q.defer();
                        require(['modules/locate/index.js'], function (controller) {
                            $controllerProvider.register('controller.locate.index', controller);
                            deferred.resolve();
                        });
                        return deferred.promise;
                    }
                }
            });
    });

    return app;
});
