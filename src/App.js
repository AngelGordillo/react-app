import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './TodoInput';
import Request from 'superagent';

var url = "http://localhost:4000/tasks";
class App extends Component {
//set the initial component
  constructor(props){
    super(props);
    this.state = {
      
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  componentWillMount() {
  //called the first time the component is loaded right before the component is added to the page
  
  Request.get(url).then((response) => {
    this.setState({
      tasks: response.body
    });
  });
        
  }
  handleRemoveTodo(id){
  Request
  .delete(url + "/" + id)
  .send({ _id: id })
  .end(function(err, res){
    console.log(res);
    }); 
  }
  handleUpdateTodo(id){
    Request
    .put(url + "/" + id)
    .send(this.state)
    .end(function(err, res){
    console.log(res.text);
    });
  }

  showEditTodo(id){
    console.log(this.state);
  }

  handleAddTodo(todo){
    console.log(todo);
    //this.setState({todos: [...this.state.todos, todo]})
  
   Request.get(url).then((response) => {
    this.setState({
      tasks: response.body
    });
  });

  }

  render() {
     const tasks  = this.state.tasks ? this.state.tasks : [];

    return (
     <div className="container">  
     <TodoInput onAddTodo={this.handleAddTodo} > </TodoInput>
     <hr/>
      <h4>Todo Count: <span className="badge"> {tasks.length} </span> </h4> 
      <ul className="list-group">
        {tasks.map((task) =>
          <li className="list-group-item" key={task._id}>
            <h4 className="list-group-item-heading"> {task.title} <small> <span className="label label-info">{task.priority} </span> </small> </h4>
              <p><span className="glyphicon glyphicon-user"> </span>
            {task.responsible}</p>
              <p>{task.description}</p>
              <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, task._id)} ><span className=" glyphicon glyphicon-trash"></span>Delete</button>
              <button className="btn btn-warning btn-sm" onClick={this.showEditTodo.bind(this, task._id)} ><span className=" glyphicon glyphicon-trash"></span>Update</button>
          </li>
          )}
      </ul>   
     </div>
    );
  }
}



export default App;
