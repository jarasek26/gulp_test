console.log(__dirname);

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('./js/db');
var path = require('path');

app.set('port', process.env.PORT || 8080);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname));

// respond with "hello world" when a GET request is made to the homepage
app.get('/a', function(req, res) {
  res.send('hello world!');
});

app.get('/', function(req, res) {
    res.sendFile('./views/todo.html', {root: __dirname });
    console.log('wyslano');
});

app.get('/angular', function(req, res) {
    res.sendFile('views/angular.html', {root: __dirname });
    console.log('wyslano');
});

app.post('/remote-url', function(req, res) {
    
    console.log('ok post');
    console.log(req.body);
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello HTTP!');
    /*
    
    fs.writeFile(__dirname + "/testPost.txt",  JSON.stringify(req), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
    */
    
    
});

app.get('/remote-url', function(req, res) {
    console.log('ok, get');
    fs.writeFile("/tmp/testGet", req, function(err) {
	    if(err) {
	        return console.log(err);
	    }

	    console.log("The file was saved!");
	}); 
});
app.listen(app.get('port'));
console.log('Listen1 on '+app.get('port'));



db.hi();
db.getPassword();
db.makeQuery();
//db.promiseTest();
