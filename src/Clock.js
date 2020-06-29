import React, { Component } from 'react';

// =====================================================================

class Clock extends Component{
    state = {
        clock: "",
        month: "",
        day: "",
        weekStr: "",
        weekArr: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
    };

    componentDidMount(){
        this.getTime();
        setInterval(this.getTime, 1000);
    };

    getTime = () => {
        const date = new Date();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const week = this.state.weekArr[date.getDay()];
        let hour = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
        // hour = hour > 12 ? parseInt(hour) - 12 : hour;
        const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
        const second = date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
    
        this.setState({
            clock: `${hour}:${minute}:${second}`,
            month: month,
            day: day,
            weekStr: week
        });
    };


    render(){
        return(
            <div className="clockDiv">
                <span className="clockSpan clockFirstElem">{this.state.clock}</span>
                <span className="clocDaySpan">{`${this.state.month}월 ${this.state.day}일`}</span>
                <span className="clocDaySpan clockLastElem">{this.state.weekStr}</span>
            </div>
        );
    };
}

// =====================================================================

export default Clock