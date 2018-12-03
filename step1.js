 // STEP ONE //


var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

 https.get(requestOptions, function (response) {
  var body = '';
  // Encoding Type Statement //
  response.setEncoding('utf8');

  // Callback start when chunk recieved //
  response.on('data', function (data) {
    body += data;
    console.log(data);
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Stream complete.');
  });

});


};

getAndPrintHTMLChunks();