import React from 'react';
import { Link } from 'react-router-dom';

function HelloWorld() {
  return (
    <div className="HelloWorld">
      <header className="App-header">
        HelloWorld
      </header>
      <Link to='/about'>Learn about this app!</Link>
    </div>
  );
}

export default HelloWorld;
