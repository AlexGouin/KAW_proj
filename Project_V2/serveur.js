const PORT=8080; 
let {PythonShell} = require('python-shell')
var http = require('http');

var fs = require('fs');
var htmlFile;
var cssFile;
var bootFile;
var fontFile;
//var PythonShell = require('python-shell');

fs.readFile('./templates/KAW_project.html', function(err, data) {
    if (err){
        throw err;
    }
    htmlFile = data;
});

fs.readFile('./static/styles/style.css', function(err, data) {
    if (err){
        throw err;
    }
    cssFile = data;
});    

fs.readFile('./static/styles/bootstrap.min.css', function(err, data) {
    if (err){
        throw err;
    }
    bootFile = data;
});  
fs.readFile('./static/styles/font-awesome.min.css', function(err, data) {
    if (err){
        throw err;
    }
    fontFile = data;
});  
var server = http.createServer(function (request, response) {
    switch (request.url) {
        case "/static/styles/bootstrap.min.css" :
            response.writeHead(200, {"Content-Type": "text/css"});
            response.write(bootFile);
            break;
        case "/static/styles/font-awesome.min.css" :
            response.writeHead(200, {"Content-Type": "text/css"});
            response.write(fontFile);
            break;
        case "/static/styles/style.css" :
            response.writeHead(200, {"Content-Type": "text/css"});
            response.write(cssFile); 
            break;
        default :    

            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(htmlFile);
    }
    response.end();
});
server.listen(PORT) 
//
////you can use error handling to see if there are any errors
//PythonShell.run('./script.py', null, function (err) { 
//  if (err) throw err;
//  console.log('finished');
//});
// run a simple script
let options = {
  mode: 'text',
  pythonPath: 'C:\Program Files\nodejs\node_modules\npm\node_modules\python-shell',
  pythonOptions: ['-u'] // get print results in real-time
//  scriptPath: 'path/to/my/scripts',
//  args: ['value1', 'value2', 'value3']
};
PythonShell.runString('x=1;print(x)', options, function (err, results) {
  // script finished
});