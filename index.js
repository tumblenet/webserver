const http = require('http');

function setupServer(app, port=3000) {
  port = process.env.PORT || port;
  var server = http.Server(app);

  server.listen(port, function listenAction() {
    console.log("Server listening on port " + port);
  });
  return server;
}

module.exports = setupServer;
