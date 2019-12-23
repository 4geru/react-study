import React from 'react';
import Message from './Message';
import CreateForm from './CreateForm';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }

  renderMessage(message, index) {
    return (
      <Message
        key={index}
        message={message}
        onClick={() => this.removeMessage(index)}
      />
    );
  }

  removeMessage(index) {
    let messages = this.state.messages;

    messages.splice(index, 1);
    this.setState({
      messages: messages
    });
  }

  addMessage(){
    return (messages, message) => {
      messages.push(message);

      this.setState({
        messages: messages
      });
    }
  }

  render() {
    console.log({message: this.state.messages});
    const messageList = this.state.messages.map((message, index) => {
      return this.renderMessage(message, index)
    });
    return (
      <div className="Board">
        board
        {messageList}

        <CreateForm onClick={this.addMessage()} messages={this.state.messages}/>
      </div>
    );
  }
}

export default Board;
