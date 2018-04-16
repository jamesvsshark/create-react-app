import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from './actions/counter';

class App extends Component {
  render() {
    const props = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
            <p>Count: {props.count}</p>
            <p>
              <button onClick={props.increment} disabled={props.isIncrementing}>
                Increment
              </button>
              <button
                onClick={props.incrementAsync}
                disabled={props.isIncrementing}
              >
                Increment Async
              </button>
            </p>

            <p>
              <button onClick={props.decrement} disabled={props.isDecrementing}>
                Decrement
              </button>
              <button
                onClick={props.decrementAsync}
                disabled={props.isDecrementing}
              >
                Decrement Async
              </button>
            </p>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
