var login = require('./models/login');
var signup = require('./models/signup');

module.exports = function(app) {
    app.post('/login', function(req, res) {
        var userName = req.body.userName;
        var userPass = req.body.userPass;
        //console.log(req.body.userName);
        //console.log(req.body.userPass);
        login.authorizedUser(userName,userPass, function(result){
            console.log("login validation : "+ result);
            res.send(result);
        });
       
    });
    
    app.post('/signup', function(req, res) {
        var userRole = req.body.userRole;
        var userName = req.body.userName;
        var userPass = req.body.userPass;
        var userEmail = req.body.userEmail;
        var userPhno = req.body.userPhno;
        console.log(userRole,userName,userPass,userEmail,userPhno);
        signup.signUpUser(userRole,userName,userPass,userEmail,userPhno, function(result){
            console.log("signup validation : "+ result);
            res.send(result);
        });
    })
    
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

};