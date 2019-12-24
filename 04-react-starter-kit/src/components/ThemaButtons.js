import React from 'react';
import actions from '../actions';
import { connect } from 'react-redux';

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

/* takes a prop 'label' and gets the other props from store via VoteContainer
  and returns a div containing the label, vote buttons, and vote summary */
const ThemaButtons = connect(
  mapStateToProps,
  mapDispatchToProps
)(function({ switchThema, isDark }) {
  return (
    <div>
      <h2>Change thema</h2>
      <button alt="isDark" onClick={switchThema}>Change</button>
    </div>
  );
});

export default ThemaButtons;