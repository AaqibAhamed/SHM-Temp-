import React, {Component} from "react";
import {
    MDBRow, 
    MDBCol,
    MDBCard
} from "mdbreact";
import Button from "./Button";
import "../../Styles/CareerSection.scss";

//Career Images
var career_1 = "/content/images/career1.jpg";
var career_2 = "/content/images/new/offshore.jpg";
var career_3 = "/content/images/career3.jpg";

const careerList = [
    {
        img : career_1,
        text : "shore-based vacancies"
    },
    {
        img : career_2,
        text : "offshore vacancies"
    },
    {
        img : career_3,
        text : "Meet Some Of Us"
    },
];

var careers = [];

export default class FeatureSection extends Component{
    render(){
        careers = [];
        for(const [i, career] of careerList.entries()){
            careers.push(
                <MDBCard key={i} className="career-img" style={{backgroundImage:"url("+career.img+")"}}>
                    <div className="position-relative overlay w-100 h-100">
                        <div className="text-bc">
                            <h3 className="text-uppercase font-weight-normal color-light h3 text-shadow">{career.text}</h3>
                        </div>
                    </div>
                </MDBCard>
            );
        }

        return (
            <MDBRow>
                <MDBCol md="6" className="p-0">
                    {careers}
                </MDBCol>
                <MDBCol md="6" className="w-100 bgcolor-secondary">
                    <div className="padding-7 padding-tb-13 position-sticky">
                        <h2 className="text-uppercase clearfix home-title-light pb-2">
                            Start your career with us
                        </h2>
                        <p className="font-weight-light color-light h4">Whether you are looking for seagoing or shore-based positions, the SHM Group has a wide range of opportunities available for you.</p>
                        <Button className="text-uppercase" light borderLight style={{width:"auto", paddingRight:"50px", marginTop:"5px"}}>
                            Start your Career Now
                        </Button>
                    </div>
                </MDBCol>
            </MDBRow>
        );
    }
}