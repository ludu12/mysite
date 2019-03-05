import { combineReducers } from 'redux';
import { LOADING_POSTS } from '../actions/actions';
import { GET_POSTS } from '../actions/actions';

export default function getPost (state = {}, action) {
	switch (action.type) {
		case GET_POSTS:
			return action.payload;
	}
	return state;
}

export default function loadingPosts (state = true, action) {
	switch (action.type) {
		case LOADING_POSTS:
			return action.payload;
	}
	return state;
}

const reducers = combineReducers({
	posts: getPosts,
	loadPosts: loadingPosts,
});

export default reducers;