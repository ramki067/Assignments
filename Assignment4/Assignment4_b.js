var http = require('http');
const fs = require('fs');
var options = {
    host: 'gmail.com',
    path: '/'
}
var request = http.request(options, function (res) {
    var data = '';
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
        console.log(data);
        fs.writeFileSync('./Assign4_b_webcontent', data);
    });
});
request.on('error', function (e) {
    console.log(e.message);
});
request.end();