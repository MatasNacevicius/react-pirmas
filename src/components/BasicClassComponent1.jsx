import React, { Component } from "react";

export class BasicClassComponent1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ color: this.props.textColor }}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default BasicClassComponent1;
