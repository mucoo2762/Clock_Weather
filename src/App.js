import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Clock from './Clock.js';
import Greeting from './Greeting.js';
import TodoList from './TodoList.js';
import TodoService from './TodoService.js';


class App extends Component{
  state = {
    addTodo: false
  }


  componentDidMount(){
    
  }

  
  onSubmittst = (text) => {
    if(text !== null){
      this.setState({
        addTodo: true
      });
    };
  };


  getLSTodoList = () => {
    const todoListArr = JSON.parse(localStorage.getItem("todo_list"));
    let todoLiElem = "";
    
    if(todoListArr !== null){
      todoLiElem = todoListArr.map((todo) => {
        return <TodoList todo={todo}/>        
      });
    }

    return todoLiElem;
  };

  addLSTodoList = () => {
    let addResult = "";
    if(this.state.addTodo){
      addResult = this.getLSTodoList();

      this.setState({
        addTodo: false
      });
    }
    return addResult; 
  }


  render(){
    return(
      <div className="mainBodyDiv">
        <div className="clockDiv">
          <Clock />
        </div>
        <Greeting />
        <TodoService onSubmit={this.onSubmittst}/>
        <ul className="todoListUl">
          {this.getLSTodoList()}
          {this.addLSTodoList()}
        </ul>
      </div>
    );
  };
}









export default App;
