var neo4j = require('neo4j-driver').v1;

    var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "deepanj"));
    driver.onCompleted = function() {
      // proceed with using the driver, it was successfully instantiated
      console.log("neo4j driver conneted");
    };
    driver.onError = function(error) {
        console.log('Driver instantiation failed', error);
    };

    var session = driver.session();
    
    var signUpUser = function(userRole,userName,userPass,userEmail,userPhno,callback){
        session.run("CREATE (SignUP:SignupDetails{SignupID:2001,UserRole:'"+userRole+"',Email:'"+userEmail+"',FullName:'"+userName+"',Password:'"+userPass+"',PhoneNumber:'"+userPhno+"'})")
			.then(function(result){
                callback('success');
                session.close();
			})
			.catch(function(error){
                callback('failure');
				console.log(error);
			});
    }
    
    module.exports.signUpUser = signUpUser;