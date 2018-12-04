var https = require('https');

var getHTML = require('./http-functions');


var requestWebsite = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
}

function printHTML (html) {
  console.log(html.toUpperCase());
};

getHTML(requestWebsite, printHTML);