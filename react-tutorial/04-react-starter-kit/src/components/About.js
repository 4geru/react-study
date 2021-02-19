import React from 'react';
import { Link } from 'react-router-dom';
import VoteContainer from '../containers/VoteContainers';

function About() {
  return (
    <div className="About">
      <header className="App-header">
        About
      </header>
      <Link to='/'>Learn about this app!</Link>

      <VoteContainer label="Upvote or downvote this app!"/>
    </div>
  );
}

export default About;
