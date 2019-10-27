import React, { Component } from "react";
import "../../Styles/PhilosophySection.scss";
import {MDBRow, MDBCol} from 'mdbreact';

var sideImage = '/content/images/banner-825x510.jpg';

export default class PhilosophySection extends Component{

    render(){
        return (
            <MDBRow className="bgcolor-light-2">
                <MDBCol md="6" className="padding-7 pl-5">
                    <h1 className="display-4 color-primary">Enabling</h1>
                    <h2 className="color-primary">Freedom at Sea</h2>
                    <p>"Enabling freedom at sea" stands for SHM’s commitment of offering our clients peace of mind – at sea, offshore and on shore. It talks about reliability, trust and partnership, which are vital for the industry we operate in. It talks about the peace of mind you have when you know that someone you trust is taking care of you. It talks about what safety enables you to do:</p>
                    <p>
                        Freedom to operate <br/>
                        Freedom to trade <br/>
                        Freedom to travel <br/>
                        Freedom to explore <br/>
                        Freedom to innovate <br/>
                        Freedom to excel
                    </p>
                </MDBCol>
                <MDBCol md="6" className="side-img d-sm-none d-md-block">
                    <h1 className="side-title color-primary">
                        Our Philosophy
                    </h1>
                    <div className="side-image z-depth-0" style={{backgroundImage:`url(${sideImage})`}}>
                        .
                    </div>
                </MDBCol>
            </MDBRow>
        );
    }
}