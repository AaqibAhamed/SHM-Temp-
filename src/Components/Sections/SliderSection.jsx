import React, {Component} from "react";
import {
    MDBRow, 
    MDBCol
} from "mdbreact";
import "../../Styles/SliderSection.scss";

import DataProvider from '../Providers/DataProvider';

import { ScreenSize } from '../Providers/FunctionProvider'


export default class SliderSection extends Component{
    constructor(props){
        super(props);
        this.state={
            Company:{},
            loading:true
        }
        this.getData();
    }

    getData = async ()=>{
        let source = await DataProvider.Company;
        
        this.setState({
            Company:source,
            loading:false
        })
    }

    render(){
        const bg_video_mp4 = "/content/videos/CruiseShip.mp4"
        const bg_img = "/content/images/new/slide1.jpg";

        if(this.state.loading){
            return <div></div>;
        }


        let imageStyles = {
            padding:0,
            backgroundImage: 'url('+bg_img+')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', 
            height:'100vh'
        };

        return (
            <ScreenSize>
                { isMobile => (
                    <MDBRow>
                    <MDBCol md="12" style={isMobile ? imageStyles : {padding:0, height:'100vh'}} className="slide-img">
                        <video id="bg_services" playsInline autoPlay muted loop >
                            <source
                                key="1"
                                src={bg_video_mp4}
                                type="video/mp4"
                            />
                        </video>
                    </MDBCol>
                </MDBRow>
                ) }
            </ScreenSize>
        );
    }
}