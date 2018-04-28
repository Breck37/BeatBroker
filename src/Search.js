import React, { Component } from "react";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div>
        <h2>Choose Playlist by Vibe: </h2>
        <select
          className="vibe"
          onChange={event => this.props.changes(event.target.value)}
        >
          <option value="Default">Select</option>
          <option value="Motivation">Get Motivated</option>
          <option value="Chill">Chill Hard</option>
          <option value="Dance">Dance It Up</option>
        </select>
        <h2>Or...</h2>
        <h2>Choose Playlist by Feel: </h2>
        <select
          className="feel"
          onChange={event => this.props.changes(event.target.value)}
        >
          <option value="Default">Select</option>
          <option value="Up">Feeling Good</option>
          <option value="In-Between">Eh...In-Between</option>
          <option value="Down">Not My Day</option>
        </select>

        <div className="Main-content">
        </div>
      </div>
    );
  }
}

export default App;
