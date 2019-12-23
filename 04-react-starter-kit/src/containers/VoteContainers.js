/* container which maps state and dispatches to its props
  so it can be referenced in the VoteButtons component */

import { connect } from 'react-redux';
import actions from '../actions';
import VoteButtons from '../components/VoteButtons';

const mapStateToProps = state => {
  return {
    voteScore: state.voteScore,
    voteCount: state.voteCount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpvote: function() {
      dispatch(actions.upvote())
    },
    onDownvote: function() {
      dispatch(actions.downvote())
    }
  }
}

const VoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteButtons);

export default VoteContainer;
