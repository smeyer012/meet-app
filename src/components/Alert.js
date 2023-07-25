import React, { Component } from 'react';
export { InfoAlert, ErrorAlert, WarningAlert };

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgColor = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderWidth: "2px",
      borderStyle: "solid",
      fontWeight: "bolder",
      borderRadius: "7px",
      borderColor: this.color,
      textAlign: "center",
      fontSize: "12px",
      margin: "10px 0",
      padding: "10px"
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(0, 0, 255)'; // blue
    this.bgColor = 'rgb(220, 220, 255)'; // light blue
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'orange';
    this.bgColor = 'rgb(252, 148, 106)';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
    this.bgColor = 'pink';
  }

}