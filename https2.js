var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

https.get(requestOptions, function(response) {
  console.log('statusCode:', response.statusCode);

  var output = "";

  response.on('data', function(data) {
    console.log('Chunk.length:', data.length);
    output += data;
  });
  response.on('end', function() {
    console.log(output);
  })
});

}
getAndPrintHTML();