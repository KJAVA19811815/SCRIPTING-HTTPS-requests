var https = require('https');
var url = require('url');


function getAndPrintHTML (options) {
  https.get(options.host, function(response) {
    console.log('statusCode:', response.statusCode);

    var parts = url.parse(response.url, true);
    console.log('link:', url.format(parts));

    response.on('data', function(data) {
      console.log('chunk.length:', data.length);
      console.log(data + "\n");
    })
  })



}
var requestOptions = {
  host: 'https://sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);


