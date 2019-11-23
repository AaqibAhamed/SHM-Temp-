import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {MDBCol, MDBRow} from "mdbreact";
import "../../Styles/FeatureSection.scss";
import {FeatureSource} from "../Providers/DataProvider";

let features = [];

class FeatureSection extends Component {

    constructor(props){
        super(props);
        this.state={
            FeatureSource:[],
            loading:true
        }
        this.getData();
    }

    getData = async ()=>{
        let source = await FeatureSource;
        
        this.setState({
            FeatureSource:source,
            loading:false
        })
    }

    render() {
        features = [];
        if(!this.state.loading){
            for (const [i,feature] of this.state.FeatureSource.entries()) {
                const {id, title, icon} = feature;
                features.push(
                    <MDBCol key={i} md="3" className="home-feature" id={id}>
                        <Link to={"/services/"+id}>
                            <button className='padding-3'>
                                <svg>
                                    <image className="feature-icon" xlinkHref={`/content/${icon}`}/>
                                </svg>
                                <h4>{title}</h4>
                            </button>
                        </Link>
                    </MDBCol>
                )
            }
        }

        return (
            <MDBRow className="feature-container bgcolor-secondary position-relative" id="services">
                <MDBCol md="12" className="text-center padding-11" id="content_services">
                    <h2 className="text-uppercase clearfix home-title color-light pb-5 position-relative">Our
                        Services</h2>
                    <MDBRow className="padding-6 pt-0 pb-0 text-center position-relative">
                        {features}
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        );
    }
}

export default FeatureSection