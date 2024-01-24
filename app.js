var http = require('http');
//create a server object:

http.createServer(function (req, res) {
    res.write('This is for demo purpose. Joyguru!'); //write a response to the client
    res.end(); //end the response
}).listen(5000); //the server object listens on port 8080

// Console will print the message
console.log('Server running at 5000');
