import { Text, Password, Checkbox, Relationship } from '@keystonejs/fields';

const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }
  return { id: user.id };
};
const userIsAdminOrOwner = auth => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};
const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

export const UserSchema = {
  schemaDoc: 'User information',
  fields: {
    name: { type: Text, isRequired: true },
    email: { type: Text, isUnique: true, },
    isAdmin: { type: Checkbox },
    password: { type: Password, isRequired: true, },
    posts: { type: Relationship, ref: 'Post.author', many: true },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
};
