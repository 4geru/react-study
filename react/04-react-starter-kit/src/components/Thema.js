import React from 'react';
import HelloWorld from './HelloWorld';
import About from './About';

// routers
import { Route, BrowserRouter } from 'react-router-dom';

/* takes a prop 'label' and gets the other props from store via VoteContainer
  and returns a div containing the label, vote buttons, and vote summary */
const Thema = function({ isDark }) {
  const thema = isDark ? 'isDark' : 'isNotDark'
  return (
    <div>
      <BrowserRouter>
        <div className={thema}>
          <Route exact path="/" component={HelloWorld}/>
          <Route path="/about" component={About}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Thema;
