import React from 'react';
import { Link } from 'react-router-dom';
import VoteContainer from '../containers/VoteContainers';

function HelloWorld() {
  return (
    <div className="HelloWorld">
      <header className="App-header">
        HelloWorld
      </header>
      <Link to='/about'>Learn about this app!</Link>

      <VoteContainer label="Upvote or downvote this app!"/>
    </div>
  );
}

export default HelloWorld;
