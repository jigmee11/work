var http = require('http');
var path = require('path');
//create a server object:n
http.createServer((req, res) => {
    res.writeHead(200,{'Contact-Type':'text/html'});
    if(req.url==='/about'){
        res.write('about');
        return res.end();
    }
    if(req.url==='/contact'){
        res.write("<h1>Hello</h1>")
        return res.end()
    }
  res.write('Hello!'); //write a response to the client
  res.end(); //end the response
}).listen(8000);