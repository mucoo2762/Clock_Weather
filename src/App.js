import React, { Component } from 'react';
import './css/App.css';
import Clock from './Clock.js';
import Greeting from './Greeting.js';
import TodoList from './TodoList.js';
import TodoService from './TodoService.js';
import Weather from './Weather';
// import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
// import ArrowDropUp from "@material-ui/icons/ArrowDropUp";


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
      todoLiElem = todoListArr.map((todo, index) => {
        return <TodoList todo={todo} index={index}/>        
      });
    }

    return todoLiElem;
  };

  addLSTodoList = () => {
    let addResult = "";
    // if(this.state.addTodo){
      addResult = this.getLSTodoList();

      this.setState({
        addTodo: false
      });
    // }
    return addResult; 
  }


  render(){
    return(
      <div className="mainBodyDiv">
        <div className="welcomeDiv">
          <Clock />
          <Greeting />
          <span className="guideDownList">Scroll down to see the TodoList.<br/><img src="images/down_2.png" alt="" className="arrow_img_ScrollDown"/></span>
        </div>
        <div className="todoDiv">
          <Weather />
          <div className="todoListSection">
            <span className="iconspan">
              <img src="images/down.png" alt="" className="arrow_img"/>
              <span className="todoListTitle">To do List</span>
              <img src="images/up.png" alt="" className="arrow_img"/>
            </span>
            <TodoService onSubmit={this.onSubmittst}/>
            <ul className="todoListUl">
              {this.getLSTodoList()}
              {this.state.addTodo ? this.addLSTodoList() : ""}
              {/* {this.addLSTodoList()} */}
            </ul>
          </div>
        </div>
      </div>
    );
  };
}


export default App;
