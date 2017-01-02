// JavaScript source code
var connect = require('connect'), serveStatic = require('serve-static');
var app = connect();
app.use(serveStatic("./angularjs"));
app.listen(5000);
//connect.createServer(connect.static("../augularjs")).listen(5000);