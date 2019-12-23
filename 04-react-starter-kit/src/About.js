import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="About">
      <header className="App-header">
        About
      </header>
      <Link to='/'>Learn about this app!</Link>
    </div>
  );
}

export default About;
