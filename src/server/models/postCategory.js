var keystone = require('keystone');

/**
 * PostCategory Model
 * ==================
 */

var PostCategory = new keystone.List('PostCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

PostCategory.add({
	name: { type: String, required: true },
});

/**
 * Relationships
 */
PostCategory.relationship({ ref: 'Post', path: 'posts', refPath: 'categories' });


/**
 * Registration
 */
PostCategory.register();
