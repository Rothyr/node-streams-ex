// PRINT_UPPERCASE //

var getHTML = require('./http-functions');


var requestWebsite = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
}

function printHTML (html) {
  console.log(html.toLowerCase());
};

getHTML(requestWebsite, printHTML);