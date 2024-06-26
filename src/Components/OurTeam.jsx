import React, {Component} from 'react';
import SEO from './Sections/SEO';
import Banner from './Sections/Banner';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import '../Styles/OurTeam.scss';
import DataProvider from './Providers/DataProvider';
import { ScreenSize } from './Providers/FunctionProvider';

var bannerImage = '/content/images/team-banner.jpg';
var bannerImageMobile = '/content/images/team-mbanner.jpg';

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
                <MDBCol key={i} md="4" sm="6" xs="12" lg="3" className="mb-md-0 mb-5 pb-4">
                    {member.img?<img
                        src={"/content/"+member.img}
                        className="rounded z-depth-1-half img-fluid member-img"
                        alt={member.name}
                        onMouseEnter={evt=>{
                            evt.currentTarget.classList.add(["zoom","z-depth-2"])
                        }}
                        onMouseLeave={evt=>{
                            evt.currentTarget.classList.remove(["zoom","z-depth-2"])
                        }}
                    />:""}
                    <h5 className="font-weight-bold dark-grey-text mt-4 h5-responsive">
                        {member.name}
                    </h5>
                    <h6 className="text-uppercase grey-text h6-responsive">{member.position}</h6>
                    {member.email?<a href={"mailto:"+member.email}><h6>{member.email}</h6></a>:""}
                </MDBCol>
            );
        })
        return (
            <div className="container-fluid team-container">
                <SEO 
                    title={!this.state.loading?this.state.seoData.team.title:"Our Team"} 
                    desc={!this.state.loading?this.state.seoData.team.desc:null}
                    page="/our-team/"
                />
                <ScreenSize>
                    { isMobile => (
                        <Banner title="About" subtitle="Our Team" image={isMobile ? bannerImage : bannerImageMobile} />
                    ) }
                </ScreenSize>
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