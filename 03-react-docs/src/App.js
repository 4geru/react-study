import React from 'react';
import HelloMessage from './HelloMessage';
import TitleContent from './TitleContent';

function App() {
  return (
    <div className="App">
      <div>
        <TitleContent title='A Simple Component' content={
          <HelloMessage name="Taylor" />
        } />
      </div>
    </div>
  );
}

export default App;
