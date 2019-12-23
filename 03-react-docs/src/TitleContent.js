import React from 'react';
import ReactDOM from 'react-dom';

class TitleContent extends React.Component {
  render() {
    return (
      <div className='TitleContent'>
        <div class='title'>
          {this.props.title}
        </div>
        <div class='content'>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default TitleContent;
