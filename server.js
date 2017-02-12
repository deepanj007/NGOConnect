 var express  = require('express');
    var app      = express();                               // create our app w/ express
    var neo4j = require('neo4j-driver').v1;                 // NEO4J DRIVER FOR neo4j connection
    var port     = process.env.PORT || 8080;                // set the port
    var database = require('./config/database');            // load the database config
    var morgan = require('morgan');                         // log requests to the console (express4)
    var bodyParser = require('body-parser');                // pull information from HTML POST (express4)
    var methodOverride = require('method-override');        // simulate DELETE and PUT (express4)

    //DB configuration ===============================================================
    
    /*var database = require('./config/database');
    var driver = neo4j.driver(database.dburl, neo4j.auth.basic(database.dbname,database.dbpassword));
    driver.onCompleted = function() {
      // proceed with using the driver, it was successfully instantiated
        console.log("neo4j driver conneted");
    };
    driver.onError = function(error) {
        console.log('Driver instantiation failed', error);
    };
    var session = driver.session();
    */
    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

    // routes ======================================================================
    require('./app/routes.js')(app);

    // listen (start app with node server.js) ======================================
    app.listen(port);
    console.log("App listening on port " + port);
