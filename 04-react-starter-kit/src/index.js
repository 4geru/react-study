import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './components/HelloWorld';
import About from './components/About';
import * as serviceWorker from './serviceWorker';
// routers
import { Route, BrowserRouter } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import votes from './reducers';

let store = createStore(votes);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={HelloWorld}/>
        <Route path="/about" component={About}/>
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
