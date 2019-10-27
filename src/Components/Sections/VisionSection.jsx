import React, {Component} from 'react';
import { MDBRow } from 'mdbreact'
import '../../Styles/VisionSection.scss';

export default class VisionSection extends Component{
    render(){
        return (
            <MDBRow className="vision-container" id="vision">
                <div className="color-light position-absolute vision-inner-container clearfix">
                    <h1 className="text-uppercase display-4 vision-title">Vision</h1>
                    <p className="vision-text">Safe seas, safe shores.</p>
                    <br/>
                    <h1 className="text-uppercase display-4 vision-title">Mission</h1>
                    <p className="vision-text">Our mission is to become the leader in creating safe and secure working environments that enable businesses’ freedom at sea and on shore. </p>
                    <p className="vision-text">We will achieve this by partnering with our customers to increase their productivity, fuel their sustainable growth by providing the most reliable safety products and engineering solutions, and having a positive impact on the world around us and on people’s lives.</p>
                </div>
            </MDBRow>
        );
    }
}