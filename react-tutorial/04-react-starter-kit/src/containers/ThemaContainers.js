/* container which maps state and dispatches to its props
  so it can be referenced in the VoteButtons component */

import { connect } from 'react-redux';
import actions from '../actions';
import Thema from '../components/Thema';

const mapStateToProps = state => {
  return {
    isDark: state.isDark
  }
}

const mapDispatchToProps = dispatch => {
  return {
    switchThema: function() {
      dispatch(actions.switchthema())
    }
  }
}

const ThemaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Thema);

export default ThemaContainer;
