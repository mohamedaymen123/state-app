import React, { Component } from "react";
import TaskList from "./Components/TaskList";
import "./App.css";
import AddNewTask from "./Components/AddNewTask";
export default class App extends Component {
  state = {
    todos: [
      { id: Math.random(), action: "wake Up", isDone: true },
      { id: Math.random(), action: "Go Out", isDone: true },
      { id: Math.random(), action: "Buy Coffe", isDone: true },
      { id: Math.random(), action: "read a book", isDone: true },
    ],
  };
  // delete function
  handleDelete = (id) =>
    this.setState({ todos: this.state.todos.filter((el) => el.id !== id) });
  // complete function
  handleComplete = (ID) =>
    this.setState({
      todos: this.state.todos.map((el) =>
        el.id === ID ? { ...el, isDone: !el.isDone } : el
      ),
    });
  // add function
  handleAdd = (newTask) =>
    this.setState({ todos: [newTask, ...this.state.todos] });

  render() {
    return (
      <div className="App">
        <AddNewTask handleAddFunction={this.handleAdd} />
        <TaskList
          list={this.state.todos}
          deleteFunction={this.handleDelete}
          CompleteFunction={this.handleComplete}
        />
      </div>
    );
  }
}