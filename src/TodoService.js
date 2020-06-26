import React, { Component } from 'react';
import logo from './logo.svg';
import App from './App.js';


// ===============================================================================

class TodoService extends Component{
    state = {
        inputValue: ""
    };


    handlerChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    handlerSubmit = (event) => {
        event.preventDefault();

        const id_cnt = localStorage.getItem("todo_id_cnt");
        let todoArr = JSON.parse(localStorage.getItem("todo_list"));
        todoArr = todoArr === null ? [] : todoArr;
        todoArr.push({
            id: parseInt(id_cnt),
            text: this.state.inputValue
        });
        
        localStorage.setItem("todo_list", JSON.stringify(todoArr));
        localStorage.setItem("todo_id_cnt", parseInt(id_cnt) + 1);

        this.state.inputValue = "";
        this.props.onSubmit(this.state.inputValue);
    }


    render(){
        return(
            <form onSubmit={this.handlerSubmit} className="todoForm">
                <input type="text" value={this.state.inputValue} onChange={this.handlerChange} placeholder="What's your today's to do list??"/>
            </form>
        );
    };
}




// ===============================================================================

export default TodoService