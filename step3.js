var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


function getAndPrintHTML (options) {

  https.get(options, function (response) {
    var body = '';
    response.setEncoding('utf-8');

    response.on('data', function(chunk) {
      body += chunk;
    });

    response.on('end', function() {
      console.log(body);
    });
  });
}

getAndPrintHTML(requestOptions);