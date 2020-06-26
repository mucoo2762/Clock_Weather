import React, { Component } from 'react';
import logo from './logo.svg';
// import './images/background_$.jpg';
// import Clock from './Clock.js';
import img1 from './images/background_1.jpg';
import img2 from './images/background_2.jpg';
import img3 from './images/background_3.jpg';
import img4 from './images/background_4.jpg';
import img5 from './images/background_5.jpg';
import img6 from './images/background_6.jpg';


// =====================================================================

class BgImg extends Component{
    state = {
        img_cnt: 6
    };

    componentDidMount(){
        this.getImgSrc();
    }

    generateRandomNum = () => {
        const num = Math.floor(Math.random() * (this.state.img_cnt));
        return num + 1;
    }

    getImgSrc = () => {
        const randNum = this.generateRandomNum();

        const image = new Image();
        image.src = `images/background_${randNum}.jpg`;
        image.classList.add("bgImg");
        // console.log(image);
        // document.querySelector(".root").appendChild(image);

        const arr = [img1, img2, img3, img4, img5, img6];

        return arr[randNum];
    }

    render(){
        return(
            <img src={this.getImgSrc()} className="bgImg"></img>
        );
    };
}


// =====================================================================

export default BgImg