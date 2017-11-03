import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Request from 'superagent';
class TodoInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
   
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }



  handleSubmit(event){
    event.preventDefault();
    this.props.onAddTodo(this.state);

     Request
    .post('http://localhost:4000/tasks')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send(this.state)
    .end(function(err, res){
    console.log(res.text);
    });

  }


  render() {
    return (
      <div>
        <h4>Add New Todo</h4>
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="inputTodoTitle" className="col-sm-2 control-label">Todo</label>
              <div className="col-sm-10">
                <input  name="title"
                        type="text"
                        className="form-control"
                        id="inputTodoTitle"
                        
                        onChange={this.handleInputChange}
                        placeholder="Title"></input>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputTodoResponsible" className="col-sm-2 control-label">Responsible</label>
              <div className="col-sm-10">
                <input  name="responsible"
                        type="text"
                        className="form-control"
                        id="inputTodoResponsible"
                        
                        onChange={this.handleInputChange}
                        placeholder="Responsible"></input>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputTodoDesc" className="col-sm-2 control-label">Description</label>
              <div className="col-sm-10">
                <textarea   name="description"
                            className="form-control"
                            rows="3"
                            id="inputTodoDesc"
                           
                            onChange={this.handleInputChange}></textarea>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputTodoPriority" className="col-sm-2 control-label">Priority</label>
              <div className="col-sm-10">
                <select   name="priority"
                          className="form-control"
                          id="inputTodoPriority"
                          
                          onChange={this.handleInputChange}>
                  <option value="lowest">Lowest</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="highest">Highest</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-success">Add Todo</button>
                <button  className="btn btn-success">Update Todo</button>
              </div>
            </div>
          </form>
      </div>
    );
  }
}


export default TodoInput;