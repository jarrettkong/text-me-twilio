import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    message: '',
    error: ''
  }

  sendSMS = async e => {
    e.preventDefault()
    try {
      await fetch('/sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: this.state.message })
      })
      this.setState({ message: '' })
    } catch (err) {
      this.setState({ error: err.message })
    }
  }

  render() {
    const { error } = this.state
    return (
      <div className="App">
        <h1>Twilio, I'd love to chat!</h1>
        <form onSubmit={this.sendSMS}>
          <input type="text" value={this.state.message} onChange={e => this.setState({ message: e.target.value })} />
          <input type="submit" value="Text me!" />
        </form>
        <h3>{error && error}</h3>
      </div>
    )
  }
}

export default App;
