// We will need to require Keystone first
const keystone = require('keystone');

// Then to get access to our API route we will use importer
const importRoutes = keystone.importer(__dirname);
// And finally set up the api on a route
const routes = {
  api: importRoutes('./api'),
};

exports = module.exports = function (app) {

  app.get('/api/post/', [keystone.middleware.api, keystone.middleware.cors], routes.api.post.list);
  app.get('/', function (req, res) {
    res.render('../public/dist/index.html');
  });
};
