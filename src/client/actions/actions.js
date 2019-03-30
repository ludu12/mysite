import axios from 'axios';

// Exporting our actions
export const LOADING_POSTS = 'LOADING_POSTS';
export const FETCH_POSTS = 'FETCH_POSTS';

// An action to check if the posts are loaded accepts true or false
export function loadingPosts(loading) {
  return {
    type: LOADING_POSTS,
    payload: loading,
  };
}

// This will get the posts from the API
export function fetchPosts(data) {
  return {
    type: FETCH_POSTS,
    payload: data,
  };
}

// This is a redux thunk that will fetch our model data
export function postsFetchData(url) {
  return (dispatch) => {
    axios.get(url)
      .then(res => {
        dispatch(fetchPosts(res.data.posts));
        dispatch(loadingPosts(false));
      });
  };
}