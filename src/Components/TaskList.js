import React, { Component } from "react";
import TaskCard from "./TaskCard";

export default class TaskList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {React.Children.toArray(
          this.props.list.map((el) => (
            <TaskCard
              task={el}
              deleteMethode={this.props.deleteFunction}
              CompleteMethode={this.props.CompleteFunction}
            />
          ))
        )}
      </div>
    );
  }
}