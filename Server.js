// Import modules
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');


// Create a server
http.createServer(function (request, res) {

    let pathname = '.' + request.url;
    console.log(pathname);

    let extName = path.extname(pathname);
    if (extName === '.html' || extName === '.css' || extName === '.json' || extName === '.js' || extName === '.jpg' || extName === '.png' || extName === '.ico' || extName === '.eot' || extName === '.ttf' || extName === '.svg') {
        fs.readFile(pathname, function (err, data) {
            if (!err) {
                res.writeHead(200, { 'Content-Type': [extName] });
                res.end(data);
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html;charset=utf8' });
                res.write(`<h2><strong style="color:red">${pathname}</strong> File name is not found!</h2>`);
            }
            res.end();
        });
    }
    else {
        fs.readFile(pathname, 'utf8', function (err, data) {
            if (!err) {
                res.writeHead(200, { 'Content-Type': [extName] });
                res.end(data);
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html;charset=utf8' });
                res.write(`<h2><strong style="color:red">${extName}</strong> File type is not found!</h2>`);
            }
            res.end();
        });
    }
}).listen(8081);
console.log('Connect to Server on port 8081')
