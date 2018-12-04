// PRINT_REVERSE //

var getHTML = require('./http-functions');


var requestWebsite = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
}

function printHTML (html) {
  console.log(html.split(" ").reverse().join(" "));
};

getHTML(requestWebsite, printHTML);