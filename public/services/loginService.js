module.service("loginService", function($http, $location){
    this.login = function(uname, pass, callback){
         var data ={
                userName: uname,
                userPass: pass
        };
        
        $http.post($location.protocol()+"://"+$location.host()+":"+$location.port()+"/login", data).success(function(data, status) {
          callback(data);
        }).error(function(error){
            console.log("error sending data");
        });
};
});