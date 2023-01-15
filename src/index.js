import React, { Component } from 'react';
import { render } from 'react-dom';
import {Child} from './Hello';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }
  onUpdate = (data) => {
    this.setState({
      [data.dataset.state]: data.value
    })
  };

  render() {
    return (
      <div>
        <h2>Parent</h2>
        Value in Parent Component State fieldVal: {this.state.fieldVal} <br/>
        {/* Value in Parent Component State otherFieldVal: {this.state.otherFieldVal}
        <br/> */}
        <Child onUpdate={this.onUpdate} fieldVal= {this.state.fieldVal} otherFieldVal ={this.state.otherFieldVal}/>
        <br />
        {/* <OtherChild passedVal1={this.state.fieldVal} passedVal2={this.state.otherFieldVal}/> */}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
