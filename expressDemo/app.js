var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

var names = [];

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/form', function(req, res) {
    res.send('Hi: ' + names.join(',') + "<form method='post'><input name='name'></form>");
})

app.post('/form', function(req, res) {
    names.push(req.body.name);
    res.redirect('/form');
})

app.post('/names', function(req, res) {
    names.pish(req.body);
    console.log(JSON.stringify(req.body));
    res.redirect('/form');
})

app.get('/', function(req, res) {
    res.send('hello world');
});

app.use(function(req, res, next) {
    var error = new Error('Not Found');
    error.status = 404;
    next(error);
})

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send("<h1>Sorry there was a problem: " + err.message + "</h1><p>" + err.stack + "</p>");
    })
} else {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send("<h1>Sorry there was a problem: " + err.message + "</h1><p>" + err.message + "</p>");
    });
}

module.exports = app;