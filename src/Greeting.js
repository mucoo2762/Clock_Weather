import React, { Component } from 'react';

// ===============================================================================

class Greeting extends Component{
  state = {
    isGreeting: false,
    inputValue: "",
    name: "",
    greetingBackStr: "Welcome to This Page!",
  };

  componentDidMount(){
      this.getUserName();
  }

  getUserName = () => {
    const userName = localStorage.getItem("clock_user_name");

    if(userName === null){
        this.setState({
            isGreeting: false
        });
    }else{
        this.setState({
            isGreeting: true
        });
        this.paintGreeting(userName);
    }
  };

  paintGreeting = (name) => {
      this.setState({
          name
      });
  };

  handlerChange = (event) => {
      const value = event.target.value;
      this.setState({
          inputValue: value
      });

      this.paintGreeting(value);
  }

  handleSubmit = (event) => {
      event.preventDefault();

      this.setState({
          isGreeting: true
      });
      localStorage.setItem("clock_user_name", this.state.name);
  }

  getGreetingText = () => {
    return `Hello ${this.state.name}!`;
  }

  render(){
    return(
        <div className="greetingDiv">
            <form onSubmit={this.handleSubmit} 
            className={this.state.isGreeting === true ? "hiddenCls greetingForm" : "showCls greetingForm"}>
                <input type="text" value={this.state.inputValue} onChange={this.handlerChange} placeholder="Please enter your name..."></input>
            </form>
            <span className={this.state.isGreeting === true ? "showCls greetingSpan" : "hiddenCls greetingSpan"}>
                {this.getGreetingText()} <br></br> {this.state.greetingBackStr}
            </span>
            <span className="guideDownList">Scroll down to see the TodoList.<br/><img src="images/down_2.png" alt="" className="arrow_img_ScrollDown"/></span>
        </div>
    ); 
  };
}

// ===============================================================================
export default Greeting;
