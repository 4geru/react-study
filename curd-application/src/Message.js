import React from 'react';

function Message(props) {
  return (
    <div className="Message">
      { props.message }
      <button onClick={props.onClick}>delete</button>
    </div>
  );
}

export default Message;
