import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    message: ''
  }

  sendSMS = e => {
    e.preventDefault()
    console.log(this.state.message)
    this.setState({ message: '' })
  }

  render() {
    return (
      <div class="App">
        <h1>Twilio, I'd love to chat!</h1>
        <form onSubmit={this.sendSMS}>
          <input type="text" value={this.state.message} onChange={e => this.setState({ message: e.target.value })} />
          <input type="submit" value="Text me!" />
        </form>
      </div>
    )
  }
}

export default App;
