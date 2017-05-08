var https = require('https');

module.exports = function getHTML (options, callback) {
  https.get(options.host, function(response) {
    console.log("statusCode:", response.statusCode);
    response.setEncoding("utf8");
    //var parts = url.parse(response.url, true);
    //console.log('link:', url.format(parts));
    //var output = "";

    response.on('data', function(data) {
      console.log('chunk.length:', data.length);
      console.log(data + "\n");


    response.on('end', function() {
      //console.log(data);
      callback(data);
    });


  })


})
    /* Your code here */
};