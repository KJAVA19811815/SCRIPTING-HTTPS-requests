  var https = require('https');


function getAndPrintHTMLChunks() {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'

  };

  https.get(requestOptions, function(response) {
    console.log('statusCode:', response.statusCode);

    response.on('data', function(data) {
      console.log('chunk.length:', data.length);
      console.log(data + "\n");
    })

  })

};
getAndPrintHTMLChunks();