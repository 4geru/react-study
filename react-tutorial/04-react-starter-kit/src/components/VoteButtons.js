import React from 'react';

/* takes a prop 'label' and gets the other props from store via VoteContainer
  and returns a div containing the label, vote buttons, and vote summary */
const VoteButtons = function({ label, onUpvote, onDownvote, voteScore, voteCount }) {
  return (
    <div>
      this is button
      <h2>{label}</h2>

      <button alt="upvote" onClick={onUpvote}>&uarr;</button> &nbsp;
      <button alt="downvote" onClick={onDownvote}>&darr;</button>

      <p>Score: {voteScore || 0} out of {voteCount || 0 } total votes!</p>

    </div>
  );
}

export default VoteButtons;
