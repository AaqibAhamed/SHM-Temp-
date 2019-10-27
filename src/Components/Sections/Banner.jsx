import React, { Component } from "react";
import "../../Styles/Banner.scss";

export default class Banner extends Component{

    render(){
        return (
            <div className="banner position-relative" style={{backgroundImage:`url(${this.props.image})`}}>
                {(this.props.video)?
                     <video id="banner_bg" playsInline autoPlay muted loop
                        poster={this.props.image}
                    >
                        <source 
                            src={this.props.video} 
                            type="video/mp4"
                        />
                    </video>
                    :''
                }
                
                <div className="banner-content clearfix z-depth-1">
                    <h1 className="text-uppercase">{this.props.title}</h1>
                    {this.props.subtitle?<h3 className="h3-responsive">{this.props.subtitle}</h3>:""}
                </div>
            </div>
        );
    }
}