// We will need to require Keystone first
var keystone = require('keystone');
// Then to get access to our API route we will use importer
var importRoutes = keystone.importer(__dirname);
// And finally set up the api on a route
var routes = {
  api: importRoutes('./api'),
};



// Export our app routes
exports = module.exports = function (app) {
  // Get access to the API route in our app
  app.get('/api/post/', keystone.middleware.api, routes.api.post.list);
  // Set up the default app route to  http://localhost:3000/index.html
  app.get('/index.html', function (req, res) {
    // Render some simple boilerplate html
    function renderFullPage() {
      // Note the div class name here, we will use that as a hook for our React code
      // We are also adding the bundled javascript code 
      return `
          <!doctype html>
          <html>
              <head>
                  <title>Keystone With React And Redux/>
              </head>
              <body>
                <div class="react-container" /> 
                  <script src="bundle.js"/>
              </body>
          </html>
          `;
    }
    // Send the html boilerplate
    res.send(renderFullPage());
  });
};