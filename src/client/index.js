import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import Posts from './containers/posts'

const store = createStore(reducers, applyMiddleware(thunk));

// This will be the entry point of our app
const App = () => {
  return (
    <div>
      <h1>Ludu's Blog</h1>
      <Posts />
    </div>
  );
};

ReactDOM.render(
  // We need to wrap our app in provider to make use of redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.root'));