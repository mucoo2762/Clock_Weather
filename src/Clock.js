import React, { Component } from 'react';
import PropTypes from 'prop-types';

// =====================================================================

class Clock extends Component{
    state = {
        clock: ""
    };

    componentDidMount(){
        this.getTime();
        setInterval(this.getTime, 1000);
    };

    getTime = () => {
        const date = new Date();
        const hour = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
        const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
        const second = date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
    
        this.setState({
            clock: `${hour}:${minute}:${second}`
        });
    };


    render(){
        return(
            <span className="clockSpan">{this.state.clock}</span>
        );
    };
}

// =====================================================================

export default Clock