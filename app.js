var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');
var http = require('http');

var app = express();
var server=http.createServer(app);
var io = require('socket.io').listen(server);

var redis=require('redis');
var client=redis.createClient();

var user_hash={};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.post('/register',function(req,res){
   var name=req.body.name;
   var age=req.body.age;
   var key="redis-cache:"+req.body.name;
   client.set(key,age);
   res.send('received');
});


app.post('/list',function(req,res){
    var key="redis-cache:"+req.body.name;
    client.get(key,function(err,data){
        console.log(data);
       if(data==null){
           res.send('User does not exist in the cache');
       }else{
           res.send(req.body.name+' exists in cache');
       }
   });
});


    
// catch 404 and forward to error handler

server.listen(3100);
module.exports = app;