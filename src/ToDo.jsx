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
      </div>
    );
  }
}

export default ToDo;
