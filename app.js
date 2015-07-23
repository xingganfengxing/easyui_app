var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var fs = require('fs');
var util = require('util');
var http = require('http');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').Server(app);
var flash = require('connect-flash');
var session = require('express-session');
var partials = require('express-partials');
var MongoStore = require('connect-mongo')(session);
var cors = require('cors');

var logger = require("./lib/logger.js");
var settings = require('./settings');

// 静态文件目录
var webRouter = require('./web_router');
var apiRouterV1 = require('./api_router_v1');

// 静态文件目录
var staticDir = path.join(__dirname, 'public');
app.use('/public', express.static(staticDir));
// views engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(partials());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
app.use(session({
    secret:settings.cookieSecret,
    store:new MongoStore({              //持久化到db
        db:settings.mongodb.dbname,
        host:settings.mongodb.host,
        port:27017
    })
  })
);

// session value
app.use(function(req,res,next){
    res.locals.user = req.session ? req.session.user : null;
    res.locals.error =  req.flash('error').toString();
    res.locals.success =  req.flash('success').toString();
    next();
});

app.use('/',webRouter);
app.use('/api/v1',apiRouterV1);

// error handlers
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;

//server.listen(settings.socket_io_server.port);
server.listen(settings.port,function(){
    console.log("Watch Manager listening on port %d in %s mode", settings.port, app.settings.env);
    console.log("God bless love....");
    console.log("You can debug your app with http://" + settings.host + ':' + settings.port);
})
