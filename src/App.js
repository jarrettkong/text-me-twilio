import React, { Component } from 'react';
import './App.scss';

class App extends Component {

  state = {
    message: '',
    status: ''
  }

  sendSMS = async e => {
    e.preventDefault()
    try {
      await fetch('/sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: this.state.message })
      })
      this.setState({ message: '', status: 'Your message has been sent!' })
    } catch (err) {
      this.setState({ status: err.message })
    }
  }

  render() {
    const { status } = this.state
    return (
      <div className="App">
        <img class="headshot" src={require("./headshot.jpg")} alt="Jarrett Kong headshot" />
        <h1 class="header">Twilio, I'd love to chat!</h1>
        <form onSubmit={this.sendSMS} class="message-form">
          <input className="message-input" type="text" value={this.state.message} placeholder="Enter your message here!" onChange={e => this.setState({ message: e.target.value })} />
          <input className="submit-btn" type="submit" value="Text me!" />
        <h3 className="status-text">{status && status}</h3>
        </form>
      </div>
    )
  }
}

export default App;
