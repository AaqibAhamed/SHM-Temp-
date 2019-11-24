import React, { Component } from 'react';
import { MDBContainer, MDBBtn } from 'mdbreact';
import { ContentTypes } from '../Models/Feature.tsx';
import { Redirect } from "react-router-dom";

class Content extends Component {
    constructor(props) {
        super(props);
        this.content = this.props.content;
        this.state = {
            click:false,
            next:""
        }
    }
    render() { 
        if(this.state.click){
            return <Redirect to={this.state.next} />;
        }
        let type = this.content.type;
        return ( <MDBContainer className={(type===ContentTypes.SIMPLE?"grey lighten-2":"")+" p-4 mt-1 mb-2 relative"}>
            <h3 className="color-primary h3-responsive">{this.content.title}</h3>
            
            {this.content.desc.split("<br/>").map((par,i) => <p key={i} className="text-justify pt-2 p-responsive">{par}</p>)}
            {type===ContentTypes.SIMPLE?
                <p className="text-right mb-n2"><MDBBtn color="deep-orange" size="sm" onClick={()=>this.setState({
                    click:true,
                    next:this.content.action?this.content.action.link:"/contact"
                })}>{this.content.action?this.content.action.text:'SEND ENQUIRY'}</MDBBtn></p>
            :""}
            {this.content.extra?(this.content.extra.map(cont => <Content content={cont} />)):""}
        </MDBContainer> );
    }
}
 
export default Content;