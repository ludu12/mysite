require('dotenv').config();

var keystone = require('keystone');
keystone.init({
  'name': 'Ludu\'s Blog',
  'static': [
    './src/server/public/dist',
    './src/server/public/img',
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

keystone.import('./src/server/models');

keystone.set('routes', require('./src/server/routes'));

keystone.set('cors allow origin', true);
keystone.set('cors allow methods', true);
keystone.set('cors allow headers', true);

keystone.start();