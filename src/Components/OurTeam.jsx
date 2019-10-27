import React, {Component} from 'react';
import SEO from './Sections/SEO';
import Banner from './Sections/Banner';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import '../Styles/OurTeam.scss';
import DataProvider from './Providers/DataProvider';

var bannerImage = '/content/images/banner.jpg';

var teamDisplay = [];

export default class OurTeam extends Component{
    constructor(props){
        super(props);
        this.state={
            TeamSource:[],
            loading:true,
            seoData:{}
        }
        this.getData();
    }

    getData = async ()=>{
        let source = await DataProvider.Team;
        let seo = await DataProvider.SEO;
        
        this.setState({
            TeamSource:source,
            seoData:seo,
            loading:false
        })
    }

    render(){
        window.scrollTo(0,0)
        teamDisplay = [];
        this.state.TeamSource.forEach((member,i)=>{
            teamDisplay.push(
                <MDBCol key={i} md="3" className="mb-md-0 mb-5 pb-4">
                    <img
                        src={"/content/"+member.img}
                        className="rounded z-depth-1-half img-fluid member-img"
                        alt={member.name}
                        onMouseEnter={evt=>{
                            evt.currentTarget.classList.add(["zoom","z-depth-2"])
                        }}
                        onMouseLeave={evt=>{
                            evt.currentTarget.classList.remove(["zoom","z-depth-2"])
                        }}
                    />
                    <h4 className="font-weight-bold dark-grey-text my-4">
                        {member.name}
                    </h4>
                    <h6 className="text-uppercase grey-text mb-3">{member.position}</h6>
                </MDBCol>
            );
        })
        return (
            <div className="container-fluid">
                <SEO 
                    title={!this.state.loading?this.state.seoData.team.title:"Our Team"} 
                    desc={!this.state.loading?this.state.seoData.team.desc:"Looking for best Boat Manufactures & Ship Chandler in India.SHM Group Manufacture,supply & service various types of boats in India.Click for more details."}
                    page="/our-team/"
                />
                <Banner title="About" subtitle="Our Team" image={bannerImage} />
                <MDBCard className="my-5 px-1 pb-5 text-center">
                    <MDBCardBody>
                    <h2 className="h1-responsive font-weight-bold my-5">
                        Our Team
                    </h2>
                    <MDBRow>
                        {teamDisplay}
                    </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </div>
        );
    }
}