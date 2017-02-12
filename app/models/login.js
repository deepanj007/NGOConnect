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
//var session = require('../../config/database');
    
    var authorizedUser = function(userName,userPass,callback){
        session.run("MATCH(n) WHERE n.Email='"+userName+"' RETURN n")
			.then(function(result){
            debugger;
            if(result.records.length > 0){
				result.records.forEach(function(record) {
                    if(record._fields[0].properties.Password == userPass){
                        console.log("if block:"+record);
                        callback(record._fields[0].properties);
                    }
                    else{
                        console.log("else block:"+record);
                        callback('false');
                    }
				});
				session.close();
            } else {
                callback('false');
            }
			})
			.catch(function(error){
				console.log(error);
			});
    }
    
    module.exports.authorizedUser = authorizedUser;