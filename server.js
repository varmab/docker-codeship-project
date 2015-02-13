var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({
  port: 3000
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('We love Docker & Codeship');
  }
});

module.exports = server;
