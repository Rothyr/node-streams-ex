// STEP 5 //

var getHTML = require('./http-functions');


var requestWebsite = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
}

function printHTML (html) {
  console.log(html);
};

getHTML(requestWebsite, printHTML);