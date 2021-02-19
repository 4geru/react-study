import React from 'react';
import { Link } from 'react-router-dom';
import VoteContainer from '../containers/VoteContainers';
import ThemaButtons from './ThemaButtons';

function HelloWorld() {
  return (
    <div className="HelloWorld">
      <header className="App-header">
        HelloWorld
      </header>
      <Link to='/about'>Learn about this app!</Link>

      <VoteContainer label="Upvote or downvote this app!"/>

      <ThemaButtons />
    </div>
  );
}

export default HelloWorld;
