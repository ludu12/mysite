import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from './reducers/reducers';
// import Posts from './containers/posts'

// const store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(<App/>, document.getElementById('root'));

// ReactDOM.render(
//   // We need to wrap our app in provider to make use of redux
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.querySelector('.root'));