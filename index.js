// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

//import keystone
var keystone = require('keystone');

// Set up our keystone instance
keystone.init({
  // The name of the KeystoneJS application
  'name': 'Ludu\'s Blog',
  // Paths to our application static files
  'static': [
    './server/public/js/',
    './server/public/img/',
  ],
  // Keystone includes an updates framework, 
  // which you can enable by setting the auto update option to true.
  // Updates provide an easy way to seed your database, 
  // transition data when your models change, 
  // or run transformation scripts against your database.
  'auto update': true,
  'session': true,
  // Whether to enable built-in authentication for Keystone's Admin UI,
  'auth': true,
  // The key of the Keystone List for users, required if auth is set to true
  'user model': 'User'
});

// Load your project's Models
keystone.import('./server/models');

// Load your project's Routes
keystone.set('routes', require('./server/routes'));

// Start Keystone
keystone.start();