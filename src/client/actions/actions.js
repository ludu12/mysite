import axios from 'axios';

// Exporting our actions
export const LOADING_POSTS = 'LOADING_POSTS';
export const GET_POSTS = 'GET_POSTS';

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
    type: GET_POSTS,
    payload: data,
  };
}

// This is a redux thunk that will fetch our model data
export function postsFetchData(url) {
  return (dispatch) => {
    const request = axios.get(url);
    request.then((response) => {
      dispatch(loadingPosts(false));
      dispatch(fetchPosts(response.data.post));
    });
  };
}