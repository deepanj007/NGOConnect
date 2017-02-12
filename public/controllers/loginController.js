module.controller('loginController', function($uibModalInstance, $scope, loginService){
    
    $scope.signin = function(uname, pass){
        loginService.login(uname,pass, function(){
            
        });
    }
})