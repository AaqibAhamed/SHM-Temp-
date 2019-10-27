import React, {Component} from "react";
import {
    MDBRow, 
    MDBCol,  
    MDBCarouselItem, 
    MDBView,
} from "mdbreact";
import "../../Styles/SliderSection.scss";

//Assets
//Logo
import DataProvider from '../Providers/DataProvider';

//Slider Images
var slide_1 = "/content/images/new/slide1.jpg";
var slide_2 = "/content/images/new/life-raft.jpg";
var slide_3 = "/content/images/new/fire_hydrant.jpg";
var slide_4 = "/content/images/new/crane.jpg";

const slides = [
    {
        img: slide_1,
        text: "Life Boat Supply & Servicing"
    },
    {
        img: slide_2,
        text: "Life Raft Supply & Servicing"
    },
    {
        img: slide_3,
        text: "Fire Fighting Appliance Inspection & Service"
    },
    {
        img: slide_4,
        text: "Crane Inspection & Service"
    },
];

let slider = [];

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
        if(this.state.loading){
            return <div></div>;
        }
        slider = [];
        for(const [index, slide] of slides.entries()){
            slider.push(
                <MDBCarouselItem key={index} itemId={index+1}>
                    <MDBView>
                    <img
                        className="d-block slide-img"
                        src={slide.img}
                        alt={slide.text}
                    />
                    </MDBView>
                </MDBCarouselItem>
            )
        }

        let imageStyles = {
            padding:0,
            backgroundImage: 'url('+slides[0].img+')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', 
            height:'100vh'
        };

        return (
            <MDBRow>
                {/* <MDBCol md="6" className="text-center padding-7">
                    <img src={DataProvider.Logo} className="img home-logo-1" alt={this.state.Company.Name} />
                    <h5 className="pt-4 padding-lr-5">“Enabling freedom at sea” stands for SHM’s commitment of offering our clients peace of mind at sea, offshore and onshore. </h5>
                </MDBCol> */}
                <MDBCol md="12" style={imageStyles} className="slide-img">
                    {/* <MDBCarousel
                        activeItem={1}
                        length={slides.length}
                        showControls={true}
                        showIndicators={false}
                        className="z-depth-1"
                    >
                        <MDBCarouselInner>
                            { slider }
                        </MDBCarouselInner>
                    </MDBCarousel> */}
                </MDBCol>
            </MDBRow>
        );
    }
}