import React, { Component } from 'react';
import logo from './logo.svg';
import './ToDo.css';
import Title from './Title'
import List from './List'

class ToDo extends Component {
  render() {
    return (
      <div className="ToDo">
        <Title />
        <List />
        <div className="AddForm">
          <input type="text" placeholder="Enter a task" id="taskbox" />
          <button id="addTask" onClick={this.addTask}>Add Task</button>
          <br/>
          <button id="clearTasks" onClick={this.clearTasks}>Finished the List</button>
        </div>
        <div className="ClearForm"></div>
      </div>
    );
  }
}

export default ToDo;
