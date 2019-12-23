import React from 'react';
import ReactDOM from 'react-dom';

class TitleContent extends React.Component {
  render() {
    return (
      <div className='TitleContent'>
        <h2 class='title'>
          {this.props.title}
        </h2>
        <div class='content'>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default TitleContent;
