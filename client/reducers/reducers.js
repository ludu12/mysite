import { combineReducers } from 'redux';
import getPosts from '../actions/post_actions/get_posts.js';
import loadingPosts from '../actions/post_actions/loading_posts.js';

const reducers = combineReducers({
	posts: getPosts,
	loadPosts: loadingPosts,
});

export default reducers;