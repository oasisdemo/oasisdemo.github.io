define(['angular'], function ( angular ) {
    var timezone8_offset = 8*60*60*1000;
    
    function locate ( cb ) {
        var oInfo = {
            message:'',
            position:null
        };
        function onLocateSucess(position){
            var message = '定位成功';
            var coords = position.coords;
            var oPosition = {
                coords: {
                    latitude        : coords.latitude,
                    longitude       : coords.longitude,
                    altitude        : coords.altitude,
                    accuracy        : coords.accuracy,
                    altitudeAccuracy: coords.altitudeAccuracy,
                    heading         : coords.heading,
                    speed           : coords.speed
                },
                timestamp   :new Date(position.timestamp+timezone8_offset)
            }

            oInfo.position = oPosition;
            oInfo.message = message;
            cb&&cb(oInfo);
        }
        function onLocateError(error){
            var message = '定位失败: ';
            switch(error.code) {
                case error.TIMEOUT:
                    message += '定位超时，请重试';
                    break;
                case error.POSITION_UNAVAILABLE:
                    message += '无法定位';
                    break;
                case error.PERMISSION_DENIED:
                    message += '用户未授权进行定位';
                    break;
                case error.UNKNOWN_ERROR:
                    message += '未知错误';
                    break;
                default:
                    message += '未知错误';
                    break;
            }
            oInfo.message = message;
            //var aa = e.code + "\n" + e.message;
            cb&&cb(oInfo);
        }

        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(onLocateSucess, onLocateError,{
                // 指示浏览器获取高精度的位置，默认为false
                enableHighAccuracy: true,
                // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
                timeout: 15000,
                // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
                maximumAge: 3000
            });
        }
        else
        {
            oInfo.message = '您的浏览器不支持定位定位功能';
            cb&&cb(oInfo);
        }
    }

    return function($scope, $interval){
        //angularjs修改了原来的setTimeout和setInterval，要用这两个玩意，必须引入$timeout和$interval，否则无法修改angular范围内的东西
        var i = 0;
        $interval(function () {
            locate(function(oInfo){
                $scope.message = oInfo.message + ++i;
                $scope.position = oInfo.position;
            });
        }, 1000);
    };
});