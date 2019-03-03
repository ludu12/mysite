import { GET_POSTS } from '../actions';

export default function getPost (state = {}, action) {
	switch (action.type) {
		case GET_POSTS:
			return action.payload;
	}
	return state;
}