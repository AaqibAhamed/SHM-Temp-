import React, { Component } from 'react';
import SEO from './Sections/SEO';
import Banner from './Sections/Banner';
import PhilosophySection from './Sections/PhilosophySection';
import VisionSection from './Sections/VisionSection';
import { SEO as source } from "./Providers/DataProvider";

var bg_video = "/content/videos/ShipCruisingDuringSunset.mp4";

var bannerImage = '/content/images/new/aboutBanner.jpg';

export default class About extends Component{
    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            data: {}
        }
        this.load();
    }

    load = async () => {
        let seo = await source;
        this.setState({
            loaded: true,
            data: seo
        });
    }

    render(){
        window.scrollTo(0,0)
        return (
            <div className="container-fluid">
                <SEO 
                    title={this.state.loaded?this.state.data.about.title:"About"} 
                    desc={this.state.loaded?this.state.data.about.desc:"Looking for best Boat Manufactures & Ship Chandler in India.SHM Group Manufacture,supply & service various types of boats in India.Click for more details."}
                    page="/about/"
                />
                <Banner title="About" subtitle="Know More About Us" image={bannerImage} video={bg_video} />
                <PhilosophySection/>
                <VisionSection/>
            </div>
        );
    }
}