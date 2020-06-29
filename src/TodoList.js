import React, { Component } from 'react';



// ===============================================================================

class TodoList extends Component{
    state = {
        id: 0,
        text: "",
        arrcnt: 0,
    }

    componentDidMount(){
        const todoText = this.props.todo.text;
        const todoID = this.props.todo.id;
        const id_cnt = localStorage.getItem("todo_id_cnt");

        if(id_cnt === null || id_cnt === "NaN"){
            localStorage.setItem("todo_id_cnt", 1);
        }

        this.setState({
            id: todoID,
            text: todoText
        });
    }

    handlerDeleteBtn = (event) => {
        const parentUl = event.target.parentNode.parentNode;
        const removeTarget = event.target.parentNode;
        console.log(removeTarget);

        parentUl.removeChild(removeTarget);
        const LS_TODO_LIST = JSON.parse(localStorage.getItem("todo_list"));
        const arrForLSSave = LS_TODO_LIST.filter((todo) => { 
            console.log(todo.id, parseInt(removeTarget.id), todo.text, event.target.nextSibling.innerText);
            return (todo.id !== parseInt(removeTarget.id)) || (todo.text !== event.target.nextSibling.innerText); 
        });
        localStorage.setItem("todo_list", JSON.stringify(arrForLSSave));

        return "";
    }

    render(){
        return(
            <li id={this.state.id}>
                <button onClick={this.handlerDeleteBtn}>X</button>
                <span>{this.state.text}</span>
            </li>
        );
    };
}



// ===============================================================================

export default TodoList