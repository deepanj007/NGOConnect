module.service("signupService", function($http, $location){
    this.signup = function(role,fullName,pass,email,ph, callback){
         var data ={
                userRole: role,
                userName: fullName,
                userPass: pass,
                userEmail: email,
                userPhno: ph
        };
        
        $http.post($location.protocol()+"://"+$location.host()+":"+$location.port()+"/signup", data).success(function(data, status) {
          callback(data);
        }).error(function(error){
            console.log("error sending data");
        });
};
});