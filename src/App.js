import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  repeater = event => {
    this.setState({
      value: event.target.value
    });
  }
  
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.repeater} />
        <p className="repeater">{this.state.value}</p>
      </div>
    );
  }
}

export default App;