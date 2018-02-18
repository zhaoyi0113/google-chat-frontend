import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import openSocket from 'socket.io-client';

class SocketClient {
  open(url, received) {
    this.socket = openSocket(url);

    this.socket.on('message', received);
  }

  sendMessage(username, message) {
    this.socket.emit('chat', {message, username});
  }
}

export class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messages: ''};
  }
  componentDidMount() {
    const {token, url, username} = this.props.location.query;
    this.openSocket(url, token);
    this.setState({username});
  }

  openSocket(url, token) {
    this.socketClient = new SocketClient();
    this.socketClient.open(url, this.receiveMessage.bind(this));
  }

  receiveMessage(data) {
    console.log('received', data);
    const messages = `${this.state.messages}\n${data.username}: ${data.message}`;
    this.setState({messages});
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>User {this.state.username}</div>
          <textarea
            className="chat-window"
            rows="30"
            cols="50"
            value={this.state.messages}
            readOnly
            style={{display: 'block'}}
          />
        </div>
        <div style={{display: 'flex', margin: 'auto'}}>
          <p>Message</p>
          <input onChange={e => this.setState({message: e.target.value})} value={this.state.message}/>
          <button
            onClick={() => {
              this.socketClient.sendMessage(
                this.state.username,
                this.state.message
              );
              const messages = `${this.state.messages}\n${this.state.username}: ${this.state.message}`;
              this.setState({messages, message: ''});
            }}
          >
            send
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    login: () => {
      dispatch(actions.login());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
