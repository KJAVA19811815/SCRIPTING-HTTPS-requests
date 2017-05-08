var getHTML = require('./https5.js');

var requestOptions = {
  host: 'https://sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions,function printHTML (html) {
  console.log(html);
})