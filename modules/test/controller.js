define(['angular'], function (angular) {
console.log(arguments)
    //angular会自动根据controller函数的参数名，导入相应的服务
    return function($scope, $http, $interval,$q){

            messages = [{
      id: 0, sender: "123456@qq.com", subject: "你好，这是一封邮件", date: "2015年4月13日", recipients: ['wifei@163.com'], message: "你好，我是xxx，这是发送给您的邮件。"
    }, {
      id: 1, sender: "123456@qq.com", subject: "你好，这是一封邮件", date: "2015年4月13日", recipients: ['wifei@163.com'], message: "你好，我是xxx，这是发送给您的邮件。"
    }, {
      id: 2, sender: "123456@qq.com", subject: "你好，这是一封邮件", date: "2015年4月13日", recipients: ['wifei@163.com'], message: "你好，我是xxx，这是发送给您的邮件。"
    }];

    
      $scope.messages = messages;
    

        $scope.info = 'kenko';      //向view/模版注入数据

        //模拟请求cgi获取数据，数据返回后，自动修改界面，不需要啰嗦的$('#xxx').html(xxx)
        $http.get('/list.html').success(function(data) {
            $scope.info = 'vivi';
        });

        var i = 0;
        //angularjs修改了原来的setTimeout和setInterval，要用这两个玩意，必须引入$timeout和$interval，否则无法修改angular范围内的东西
        $interval(function () {
            i++;
            $scope.info = i;
        }, 1000);
    };
});