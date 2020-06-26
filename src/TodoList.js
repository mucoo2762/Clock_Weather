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
        const id_cnt = localStorage.getItem("todo_id_cnt");
        const todoId = id_cnt === 0 ? 1 : id_cnt;

        this.setState({
            id: todoId,
            text: todoText
        });
    }

    handlerDeleteBtn = (event) => {
        const parentUl = event.target.parentNode.parentNode;
        const removeTarget = event.target.parentNode;

        parentUl.removeChild(removeTarget);
        const LS_TODO_LIST = JSON.parse(localStorage.getItem("todo_list"));
        const LS_ID_CNT = JSON.parse(localStorage.getItem("todo_id_cnt"));
        const arrForLSSave = LS_TODO_LIST.filter((todo) => { 
            return (todo.id !== parseInt(removeTarget.id)) && (todo.text !== event.target.nextSibling.innerText); 
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