


var https = require('https');
var requestWebsite = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


function getHTML (websites, callback) {

  https.get(websites, function(response) {

    if(response.statusCode !== 200) {
      callback(new Error('Request Failed with Status Code ' + response.statusCode), null);
      return;
    }

    var body = '';
    response.setEncoding('utf-8');
    response.on('data', function(chunk) {
      body += chunk;
    });

    response.on('end', function() {
      callback(body);

    });
  });



}

function printHTML (html) {
  console.log(html);
}



getHTML(requestWebsite, printHTML);