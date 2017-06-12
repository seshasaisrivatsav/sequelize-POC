/**
 * Created by sesha on 6/12/17.
 */


var express = require('express');
var app = express();

var bodyparser = require('body-parser');
var expressValidator	=	require('express-validator');
var router  = require('./router');

app.use(bodyparser.json());
app.use(expressValidator());
app.use(bodyparser.urlencoded({extended: true}));


app.use('/', router);

app.listen(3111);