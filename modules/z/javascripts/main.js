/**
 * main.js
 */
+function ( global ) {

	'use strict';

    var MODULE_MAIN = 'z';
    var PATH_LIB = MODULE_MAIN + '/libs/';

	requirejs.config({
	    baseUrl : 'modules',
	    paths : {
            'sprintf': [
                '//cdn.bootcss.com/sprintf/1.0.3/sprintf.min',
                PATH_LIB + 'sprintf/1.0.3/sprintf.min'
            ],
            'require/css': [
                '//cdn.bootcss.com/require-css/0.1.8/css.min',
                PATH_LIB + 'require-css/0.1.8/css.min'
            ],
            'require/json': [
                '//cdn.bootcss.com/requirejs-plugins/1.0.3/json.min',
                PATH_LIB + 'requirejs-plugins/1.0.3/json.min'
            ],
	    	'less'			: '//cdn.bootcss.com/less.js/2.7.1/less.min',
	        'bootstrap'       : '//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min',  
	        'angular'         : '//cdn.bootcss.com/angular.js/1.5.6/angular.min',  
	        'angular-route' : '//cdn.bootcss.com/angular.js/1.5.6/angular-route.min',
            'angular-ui-router' : '//cdn.bootcss.com/angular-ui-router/1.0.0-alpha0/angular-ui-router.min',
            'routes'            : MODULE_MAIN + '/javascripts/routes',
            'jquery': [
                '//cdn.bootcss.com/jquery/1.11.3/jquery.min',
                PATH_LIB + 'jquery/jquery-1.11.3'
            ],
            'jquery.twbsPagination': [
                '//cdn.bootcss.com/twbs-pagination/1.3.1/jquery.twbsPagination.min',
                PATH_LIB + 'jquery/jquery.twbsPagination'
            ],
            'async': [
                '//cdn.bootcss.com/async/2.0.1/async.min',
                PATH_LIB + 'async/2.0.1/async.min'
            ],
            'echarts2': [
                '//cdn.bootcss.com/echarts/2.2.7/echarts-all',
                PATH_LIB + 'echarts2/echarts-all'
            ],
            'echarts3': [
                '//cdn.bootcss.com/echarts/3.2.2/echarts.min',
                PATH_LIB + 'echarts/echarts.min'
            ],
            'angular': [
                '//cdn.bootcss.com/angular.js/1.5.7/angular',
                PATH_LIB + 'angularjs/angular'
            ],
            'angular-messages': [
                '//cdn.bootcss.com/angular-messages/1.5.7/angular-messages',
                PATH_LIB + 'angularjs/angular-messages'
            ],
            'angular-ui-router': [
                '//cdn.bootcss.com/angular-ui-router/0.2.18/angular-ui-router',
                PATH_LIB + 'ui-router/angular-ui-router'
            ],
            'angularAMD': [
                '//cdn.jsdelivr.net/angular.amd/0.2/angularAMD.min',
                PATH_LIB + 'angularjs/angularAMD'
            ],
            'bootstrap': [
                '//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap',
                PATH_LIB + 'bootstrap/js/bootstrap'
            ],
            'bootstrapTable': [
                // '//cdn.bootcss.com/bootstrap-table/1.10.1/bootstrap-table',
                PATH_LIB + 'bootstrap-table/bootstrap-table'
            ],
            'app': MODULE_MAIN + '/javascripts/app'
	    },
	    shim : {
	        bootstrap : {
	            deps : ['jquery'],
	            exports :'bootstrap'
	        },
	        angular: {
              exports: 'angular'
          },
          // 'angular-route': {
          //     deps: ['angular'],
          //     exports: 'angular-route'
          // },
          'angular-ui-router': {
              deps: ['angular'],
              exports: 'angular-ui-router'
          }
	    },
        map: {
            '*': {
                css: 'require/css',
                echarts : 'echarts3'
            }
        },
        deps: [
            'app'
        ],
        urlArgs: 'bust=1'// + (new Date()).getTime()
	});
}( window );
