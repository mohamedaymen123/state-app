import React, { Component } from "react";

export default class AddNewTask extends Component {
  state = {
    newAction: "sddd",
  };
  handleSubmit = (e) => {
    // e.preventDefault();
    const newOne = {
      id: Math.random(),
      action: this.state.newAction,
      isDone: false,
    };
    this.props.handleAddFunction(newOne);
  };
  render() {
    // console.log(this.state.newAction);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newAction}
            onChange={(e) => this.setState({ newAction: e.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}