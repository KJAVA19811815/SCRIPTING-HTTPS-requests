var https = require('https');
var url = require('url');


function getHTML (options, callback) {
  https.get(options.host, function(response) {
    console.log("statusCode:", response.statusCode);

    var parts = url.parse(response.url, true);
    console.log('link:', url.format(parts));
    var output = "";

    response.on('data', function(data) {
      console.log('chunk.length:', data.length);
      //console.log(data + "\n");
      output += data;

    response.on('end', function() {
      //console.log(data);
      callback(output);
    });


  })


})
}


/*function saveHTML (html) {
  var fs = require("fs");
  var data = html;
  var writerStream = fs.createWriteStream('print.txt')

writerStream.write(data,'UTF8');

writerStream.end();

writerStream.on('finish', function() {
    console.log("Write completed.");
});

}

*/

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'https://sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)