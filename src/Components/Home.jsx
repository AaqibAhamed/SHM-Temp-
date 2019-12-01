import React, {Component} from "react";
import SEO from "./Sections/SEO";
import SliderSection from "./Sections/SliderSection";
import FeatureSection from "./Sections/FeatureSection";
import AboutSection from "./Sections/AboutSection";
import { SEO as source } from "./Providers/DataProvider";

export default class Home extends Component{
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
                    title={this.state.loaded?this.state.data.home.title:"Boat Manufacturers and Ship Chandlers in Sri Lanka"} 
                    desc={this.state.loaded?this.state.data.home.desc:null}
                    page="/"
                />
                <SliderSection/>
                <FeatureSection />
                <AboutSection />
            </div>
        );
    }
}