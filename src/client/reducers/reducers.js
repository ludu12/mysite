import { combineReducers } from 'redux';
import { LOADING_POSTS } from '../actions/actions';
import { FETCH_POSTS } from '../actions/actions';

export function fetchPosts (state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return action.payload;
	}
	return state;
}

export function loadingPosts (state = true, action) {
	switch (action.type) {
		case LOADING_POSTS:
			return action.payload;
	}
	return state;
}

const reducers = combineReducers({
	posts: fetchPosts,
	loadPosts: loadingPosts,
});

export default reducers;