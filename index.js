const http = require('http');

function setupServer(app, port=3000) {
  if (global.tnserver != undefined) {
    return global.tnserver;
  }
  port = process.env.PORT || port;
  //var server = http.Server(app);
  var server = http.createServer(app);

  server.listen(port, function listenAction() {
    console.log("Server listening on port " + port);
  });
  global.tnserver = server;
  return server;
}

module.exports = setupServer;
