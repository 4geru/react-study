/* reducers */

import { UPVOTE, DOWNVOTE, SWITCHTHEMA } from './actions';

function votes(state = [], action) {
  switch (action.type) {
    case UPVOTE:
      return Object.assign({}, state, {
        voteScore: ( state.voteScore ) ? state.voteScore + 1 : 1,
        voteCount: ( state.voteCount ) ? state.voteCount + 1 : 1
      });
    case DOWNVOTE:
      return Object.assign({}, state, {
        voteScore: ( state.voteScore ) ? state.voteScore - 1 : -1,
        voteCount: ( state.voteCount ) ? state.voteCount + 1 : 1
      });
    case SWITCHTHEMA:
      return Object.assign({}, state, {
        isDark: !state.isDark
      });
    default:
      return state;
  }
}

export default votes;
