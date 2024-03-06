import React, { Component } from "react";

export class BasicClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.numberArray);
    this.showProps = this.showProps.bind(this);
    this.state = { backgroundColor: "purple" };
  }
  changeBg = () => {
    this.setState({ backgroundColor: "red" });
  };

  showProps(event) {
    console.log(this.props);
    console.log(event);
  }

  render() {
    return (
      <div style={{ color: this.props.textColor }}>
        labas is klasinio komponento
        <button
          onClick={this.changeBg}
          style={{ backgroundColor: this.state.backgroundColor }}
        >
          click
        </button>
      </div>
    );
  }
}

export default BasicClassComponent;
