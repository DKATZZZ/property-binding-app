import React from 'react';
export class Child extends React.Component {

  update = (e) => {
    this.props.onUpdate(e.target)
  };

  render() {
    return (
      <div>
        <h4>Child</h4>
        <input
          type="text"
          placeholder="type here"
          onChange={this.update}
         data-state = "fieldVal"
          value={this.props.fieldVal}
        /><br/><br/>
      {/* <input
          type="text"
          placeholder="type here"
          onChange={this.update}
      data-state = "otherFieldVal"
          value={this.props.otherFieldVal}
        /> */}
      </div>
    )
  }
}

export class OtherChild extends React.Component {
  render() {
    return (
      <div>
        <h4>OtherChild</h4>
        Value in OtherChild Props passedVal1: {this.props.passedVal1} <br/>
      Value in OtherChild Props passedVal2: {this.props.passedVal2}
      </div>
    )
  }
}
