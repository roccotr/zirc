var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./app/routers/index');
var api = require('./app/routers/api');
var io = require('socket.io');
var client = require('socket.io-client');


var app = express();





// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/nbh', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

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


var server = app.listen(5555, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

var net = require('net');




var socket = io(server);
socket.on('connection',function(sck){
 var socket_client = net.Socket();
 socket_client.connect(10001,'localhost');
 socket_client.on('data', function(data) {
  console.log('data',data.length);
  console.log('data',data.toString());
   console.log(JSON.parse(data.toString()));
   socket.emit('recv_msg',JSON.parse(data.toString()));
   //client.end();
 });

 console.log('connection');
 sck.on('new_channel',function(msg){
  //socket_client.write('popopopo');
 });
 sck.on('send_msg',function(msg){
   socket_client.write(JSON.stringify(msg));
 });
});
