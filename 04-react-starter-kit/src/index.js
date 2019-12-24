import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ThemaContainer from './containers/ThemaContainers';
import * as serviceWorker from './serviceWorker';

// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import votes from './reducers';

let store = createStore(votes);

ReactDOM.render((
  <Provider store={store}>
    <ThemaContainer />
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
