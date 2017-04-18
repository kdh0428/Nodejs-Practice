var http = require('http');

var options = {
  host: 'localhost',
  port: '8081',
  path: '/index.html'
};

var callback = function(response){
  let body = '';
  response.on('data', function(data){
    body += data;
  });


  response.on('end', () => {
    console.log(body);
  });

};

var req = http.request(options, callback);
req.end();
