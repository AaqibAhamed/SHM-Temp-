import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {
    MDBRow, 
    MDBCol
} from "mdbreact";
import "../../Styles/AboutSection.scss";
import "../../Styles/includes/padding.scss";
import Button from "./Button";
import DataProvider from "../Providers/DataProvider";

var bg_video_mp4 = "/content/videos/ShipCruisingDuringSunset-240.mp4";

var aboutUsImage = "/content/images/new/aboutSession.jpg";

export default class AboutSection extends Component{
    render(){
        let AboutButtons = [];
        let About = DataProvider.NavigationMenu[1];
        if(About.children){
            let dark = false
            About.children.forEach((value, i) => {
                if(dark){
                    if(value.link){
                        AboutButtons.push(<Link key={i} to={value.link}><Button className="text-uppercase clearfix font-weight-normal lead about-button m-0" light bgPrimaryDark>
                            {value.title}
                        </Button></Link>);
                    }else{
                        AboutButtons.push(<Button key={i} href={value.href?value.href:'#'} className="text-uppercase clearfix font-weight-normal lead about-button m-0" light bgPrimaryDark>
                            {value.title}
                        </Button>)
                    }
                    dark = false;
                }else{
                    if(value.link){
                        AboutButtons.push(<Link key={i} to={value.link}><Button className="text-uppercase clearfix font-weight-normal lead about-button m-0" light bgPrimary>
                            {value.title}
                        </Button></Link>);
                    }else{
                        AboutButtons.push(<Button key={i} href={value.href?value.href:'#'} className="text-uppercase clearfix font-weight-normal lead about-button m-0" light bgPrimary>
                            {value.title}
                        </Button>)
                    }
                    dark = true;
                }
            });
        }
        
        return (
            <div>
                <div className="about-s1 padding-7 padding-lr-33 text-center pb-2">
                    <h2 className="text-uppercase clearfix home-title pb-3">About Us</h2>
                    <p className="font-weight-normal h6 p-4 pt-0">
                        With over 15 service station facilities all across India and overseas locations, SHM ShipCare Sri 
                        Lanka was established in 2015. <br/> With a team of experienced engineers, mechanics, and 
                        electricians, SHM Shipcare seals the promise of good services for all Life Saving, Fire Fighting, 
                        Electronics and Cargo Gear equipment and general ship repair needs.
                    </p>
                    <Link to="/about">
                        <Button className="text-uppercase about-btn">
                            Find Out More
                        </Button>
                    </Link>
                </div>
                <MDBRow className="padding-13 padding-tb-0">
                    <MDBCol md="7" className="p-0 about-container">
                        {AboutButtons}
                    </MDBCol>
                    <MDBCol md="5" className="p-0 about-container">
                        <video id="bg_about" playsInline autoPlay muted loop
                            poster={aboutUsImage}
                        >
                            <source 
                                src={bg_video_mp4} 
                                type="video/mp4"
                            />
                        </video>
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}