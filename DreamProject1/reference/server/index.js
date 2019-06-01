var express = require('express');
var app = express();
var path = require('path');
var user = require('./server/lib/user/user.routes');
var bParser = require('body-parser');
var session = require('express-session');
var cors = require("cors")
var mongoose = require('mongoose');
var passport = require('passport');
var fileUpload = require('express-fileupload');
var mongodbStore = require('connect-mongo')(session);
var jwt = require('express-jwt');

mongoose.connect('mongodb://sanjeev:123456@ds139470.mlab.com:39470/sdk');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
    console.log("We are connected")
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
app.use(fileUpload());
app.use(bParser.json());

app.use(bParser.urlencoded({ extended: true }));

var engine = require('consolidate');
app.set('views', path.join(__dirname, '/'));
app.engine('html', engine.mustache);
app.set('view engine', 'html');
app.use('/', express.static(path.join(__dirname, '')));
app.use(express.static('src'));


app.use(session({
    name: 'session', store: new mongodbStore({
        mongooseConnection: mongoose.connection,
        touchAfter: 24 * 3600
    }), secret: 'qwertyuiop123456789', resave: false,
    saveUninitialized: false, cookie: { maxAge: 1000 * 60 * 15 }
}));
// Init passport authentication 
app.use(passport.initialize());
// persistent login sessions 
app.use(passport.session());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,x-access-token, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
});
var jwt = require('jsonwebtoken');

require('./server/router')(app);
app.get('/api/login', function (req, res) {
    res.send({ login: true })
})
app.all('/*', function (req, res) {
    res.render('index.html')
})
app.listen(3000, function () {
    console.log('Example app  listening on port 3000!');
})