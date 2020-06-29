import React, { Component } from 'react';


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

        let id_cnt = localStorage.getItem("todo_id_cnt");
        if(id_cnt === null || id_cnt === "NaN") {
            localStorage.setItem("todo_id_cnt", 1); 
            id_cnt = 1;
        }

        let todoArr = JSON.parse(localStorage.getItem("todo_list"));
        todoArr = todoArr === null ? [] : todoArr;
        todoArr.push({
            id: parseInt(id_cnt),
            text: this.state.inputValue
        });
        
        localStorage.setItem("todo_list", JSON.stringify(todoArr));
        localStorage.setItem("todo_id_cnt", parseInt(id_cnt) + 1);

        this.setState({
            inputValue: ""
        });
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