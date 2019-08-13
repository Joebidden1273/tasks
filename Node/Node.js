
//var http = require('http');
//var dt = require('./module1');
//create a server object
//http.createServer(function (req,res) {
//res.writeHead(200,{'Content-Type':'text/plain'});
   //res.write("Hello Joebidden ");// write a response to the client
   //res.write("The Current Date and Time is:" + dt.myDateTime());// write a response to the client
   //res.end(); // end the response
//}).listen(8080);// the server object listens on port 8080

//ReadFile
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('javascript.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);


