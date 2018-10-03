import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import ia from '../images/herowatch.jpg';
import ib from '../images/surface.jpg';
import ic from '../images/bannerthum.jpg';
import {Link} from 'react-router-dom';


class CarouselBro extends Component {
    kucingBertasbih = () => {
        if(this.props.munculText) {
            return (<h1>{this.props.textnya}</h1>);
        }
    }
    render() {
        return (
            <div>
                <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} showIndicators={false} className="container kucing">
                <a href="./">
                    <div className="merdeka" >
                        <img src={ia} alt="BDO 1"/>
                    </div>
                    </a>
                    <a href="./">
                    <div className="merdeka">
                        <img src={ib} alt="BDO 2" />
                    </div>
                    </a>
                     <a href="./">
                    <div className="merdeka">
                        <img src={ic} alt="BDO 3"/>
                    </div>
                    </a>
                </Carousel>
                {this.kucingBertasbih()}
            </div>
        );
    }
}

export default CarouselBro;