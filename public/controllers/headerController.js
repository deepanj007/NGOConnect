module.controller('headerController', function($scope, $uibModal, $sessionStorage, $state){
    $scope.loginAccessInit = function(){
       if($sessionStorage.sessionMessage === undefined || $sessionStorage.sessionMessage === null){
           $scope.loginAccessFlag = true;
       }else{
           $scope.loginAccessFlag = false;
           $scope.userRole = $sessionStorage.sessionMessage.role;
       }
    };
    
    $scope.logOut = function(){
        delete $sessionStorage.sessionMessage;  
       $state.reload();
    };
    
    $scope.openSignUp = function(){
        var modalInstance = $uibModal.open({
      //animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'partials/signupModal.html',
      controller: function($scope, $uibModalInstance, $sessionStorage, signupService, $state){
          $scope.signup = function (){
            //get the user info from backend
            signupService.signup($scope.role,$scope.fullName,$scope.pass,$scope.email,$scope.ph, function(data){
            console.log(data);
                if(data === 'false'){
                    console.log("Wrong Credential");
                    //$scope.wrongCredential = 'true';
                } else{
                    //$sessionStorage.sessionMessage = data;
                    $uibModalInstance.dismiss('cancel');
                    //$scope.wrongCredential = 'false';
                    //$state.reload();
                    
                }
            
            });
        };
      }
    });
    }
    
    $scope.openLogin = function(){
       var modalInstance = $uibModal.open({
      //animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'partials/loginModal.html',
      controller: function($scope, $uibModalInstance, $sessionStorage, loginService, $state) {

        $scope.signin = function (uname, pass){
            //get the user info from backend
            loginService.login(uname,pass, function(data){
            console.log(data);
                if(data === 'false'){
                    console.log("Wrong Credential");
                    $scope.wrongCredential = 'true';
                } else{
                    $sessionStorage.sessionMessage = data;
                    $uibModalInstance.dismiss('cancel');
                    $scope.wrongCredential = 'false';
                    $state.reload();
                    
                }
            
            });
        };
    }   
    })
       }
})