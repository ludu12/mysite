const server = require('./build/index');
module.exports = {
  keystone: server.keystone,
  apps: server.apps
};
