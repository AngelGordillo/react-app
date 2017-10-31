import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var todos = [
  {
    todoTitle: 'My first todo',
    todoResponsible: 'Angel',
    todoDescription: 'My first description',
    todoPriority: 'low',
  },
    {
    todoTitle: 'My second todo',
    todoResponsible: 'Angel',
    todoDescription: 'My second description',
    todoPriority: 'medium',
  },
    {
    todoTitle: 'My third todo',
    todoResponsible: 'Angel',
    todoDescription: 'My third description',
    todoPriority: 'high',
  }
]
class App extends Component {
//set the initial component
  constructor(props){
    super(props);
    this.state = {
      todos
    };
  }
  render() {
    return (
     <div className="container">  
      <h4>Todo Count: <span className="badge"> {this.state.todos.length} </span> </h4> 

     </div>
    );
  }
}

export default App;
