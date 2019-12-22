import { Keystone } from '@keystonejs/keystone';
import { GraphQLApp } from '@keystonejs/app-graphql';
import { StaticApp } from '@keystonejs/app-static';
import { AdminUIApp } from '@keystonejs/app-admin-ui';
import { MongooseAdapter as Adapter } from '@keystonejs/adapter-mongoose';
import { UserSchema } from './lists/user';
import { PostSchema } from './lists/post';
import { PostCategorySchema } from './lists/post-category';
import { PasswordAuthStrategy } from '@keystonejs/auth-password';

const PROJECT_NAME = 'mysite';

export const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
});

keystone.createList('User', UserSchema);
keystone.createList('PostCategory', PostCategorySchema);
keystone.createList('Post', PostSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});


export const apps = [
  new GraphQLApp(),
  new StaticApp({ path: '/', src: 'dist' }),
  new AdminUIApp({ enableDefaultRoute: true, authStrategy }),
];

