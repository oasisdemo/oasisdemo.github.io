define(['angular'], function (angular) {
    //angular会自动根据controller函数的参数名，导入相应的服务
    return function($scope, $stateParams){

      messages = [
        {
          id: 0, sender: "123456@qq.com", subject: "你好，这是一封邮件1", date: "2015年4月13日", recipients: ['wifei@163.com'], message: "你好，我是xxx，这是发送给您的邮件。"
        }, 
        {
          id: 1, sender: "123456@qq.com", subject: "你好，这是一封邮件2", date: "2015年4月13日", recipients: ['wifei@163.com'], message: "你好，我是xxx，这是发送给您的邮件。"
        }, 
        {
          id: 2, sender: "123456@qq.com", subject: "你好，这是一封邮件3", date: "2015年4月13日", recipients: ['wifei@163.com'], message: "你好，我是xxx，这是发送给您的邮件。"
        }
      ];

      $scope.message = messages[$stateParams.id];
    };
});
