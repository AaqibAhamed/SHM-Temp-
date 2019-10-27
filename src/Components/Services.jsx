import React, {Component} from 'react';
import Banner from './Sections/Banner';
import SEO from './Sections/SEO';
import FunctionService from './Providers/FunctionProvider';
import {MDBRow, MDBCol, MDBContainer} from 'mdbreact';
import '../Styles/Services.scss';
import {FeatureSource, SEO as SeoSource} from "./Providers/DataProvider";
import { Redirect } from "react-router-dom";

var bannerImage = '/content/images/banner-2.jpg';

class Services extends Component{
    constructor(props){
        super(props);
        this.state={
            FeatureSource:[],
            loading:true,
            click:false,
            loc:"",
            seoData:{}
        }
        this.getData();
    }

    getData = async ()=>{
        let source = await FeatureSource;
        let seo = await SeoSource;
        this.setState({
            FeatureSource:source,
            seoData: seo,
            loading:false
        })
    }

    render(){
        if(this.state.loading){
            return <div className="err-container"><p>Service Loading</p></div>;
        }
        if(this.state.click){
            this.setState({
                click:false
            });
            return <Redirect to={"services/"+this.state.loc}/>
        }
        let params = this.props.match.params;
        let services;
        let service;
        if(params.serviceId){
            services = FunctionService.getFeatures(this.state.FeatureSource,params.serviceId);
            if(services.length===0){
                return <div className="err-container"><p>Service Not Found</p></div>;
            }
            service = services[0];
        }else{
            services = FunctionService.getFeatures(this.state.FeatureSource);
        }

        let servicesList = [];
        let dark = false;

        services.forEach((service,i)=>{
            servicesList.push(
                <MDBCol key={i} className="text-center service" lg="4" md="6" sm="12">
                    <div className={"dark inner-service"} onClick={()=>{
                        this.setState({
                            click:true,
                            loc:service.id
                        })
                    }}>
                        <div><div><svg className="mb-2">
                            <image className="service-icon" xlinkHref={`/content/${service.icon}`}/>
                        </svg></div></div>
                        <h4 className="h4 w-100">{service.title}</h4>
                        <p>{service.content?service.content[0].desc:""}</p>
                    </div>
                </MDBCol>
            )
            dark=!dark;
        })

        window.scrollTo(0,0)
        return (
            <div className="container-fluid services-container">
                {params.serviceId?
                <SEO 
                    title={service.title + " " + (!this.state.loading?this.state.seoData.service.title:"Service")}
                    desc={!this.state.loading?(service.desc?service.desc:this.state.seoData.service.desc):"Looking for best Boat Manufactures & Ship Chandler in India.SHM Group Manufacture,supply & service various types of boats in India.Click for more details."}
                    page={"/services/"+service.id}
                />:
                <SEO 
                    title={!this.state.loading?this.state.seoData.services.title:"Services"}
                    desc={!this.state.loading?this.state.seoData.services.desc:"Looking for best Boat Manufactures & Ship Chandler in India.SHM Group Manufacture,supply & service various types of boats in India.Click for more details."}
                    page="/services/"
                />}
                {params.serviceId?<Banner title="Services" subtitle={service.title} image={service.img?"/content/"+service.img:bannerImage}/>:<Banner title="Services" image={bannerImage}/>}
                {services.length===1?<MDBContainer fluid>
                    {service.content?service.content.map((content,i)=>{
                        return content.render(i)
                    }):""}
                </MDBContainer>:<MDBRow className="service-container padding-10">{servicesList}</MDBRow>}
            </div>
        );
    }
}

export default Services;