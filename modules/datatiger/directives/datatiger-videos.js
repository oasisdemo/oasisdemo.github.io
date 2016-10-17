/**
 * directive dashboard-log by z04434@20161013
 */
define(['angularAMD', 'sprintf'],
    function (app) {

        var sLang = top.lang || 'cn';
        var URL_TEMPLATE_FILE = sprintf('modules/datatiger/views/%s/datatiger-videos.html', sLang);
        var URL_GET_LOG = '/v3/devlogserver/getlogstats?devSN=%s';

        app.directive('datatigerVideos', ['$timeout', '$rootScope', '$http', '$q',
            function ($timeout, $rootScope, $http, $q) {
                return {
                    templateUrl: URL_TEMPLATE_FILE,
                    restrict: 'E',
                    scope: {
                        //sn: '@'
                    },
                    replace: true,
                    controller: function ($scope, $element, $attrs, $transclude) {
                    },
                    link: function ($scope, $element, $attrs, $ngModel) {
                        $scope.datatiger = {
                            auth:1,
                            videos:[{


                            }]
                        };

                        // var sUrl = sprintf(URL_GET_LOG, $scope.sn);
                        // $http.get(sUrl).then(success, fail);
                        // // {"logstats":[0,0,0,0,95,0,130,0]} - ok
                        // // {"errcode":"Permission denied"} - err
                        // function success(data) {
                        //     var log = data.data.logstats;
                        //     if(log&&(8 == log.length)){
                        //         $scope.logLevels[0].data = log[0] + log[1];
                        //         $scope.logLevels[1].data = log[2] + log[3];
                        //         $scope.logLevels[2].data = log[4] + log[5];
                        //         $scope.logLevels[3].data = log[6] + log[7];
                        //     }
                        //     else{
                        //         console.log('error', data);
                        //     }
                        // }

                        // function fail(data) {
                        //     console.log('error', data);
                        // }
                        
                    }
                };
            }]);
    });
