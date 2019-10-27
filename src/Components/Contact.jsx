import React,{ Component } from "react";
import {MDBInput,MDBBtn, MDBIcon} from 'mdbreact';
import SEO from './Sections/SEO';
import '../Styles/Contact.scss';
import { Redirect } from "react-router-dom";
import { SEO as source } from "./Providers/DataProvider";

class Contact extends Component{
    constructor() {
        super();
        this.state = {
          name: "",
          email: "",
          message: "",
          success: false,
          loaded: false,
          seoData:{}
        };
        this.load();
    }
      
    load = async () => {
        let seo = await source;
        this.setState({
            loaded: true,
            seoData: seo
        });
    }

    sendContact = async (e)=>{
        e.preventDefault();
        let {name, email, message} = this.state;

        await fetch('/sendmail.php',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:{
                "name":name,
                "email":email,
                "message":message,
                "pass":93724918
            }
        }).then(res=>{
            if(res.data==="{isvalid:true}")
                this.setState({
                    success:true
                })
        }).catch(err=>{
            console.log(err)
        })
        this.setState({
            success:true
        })
    }
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        if(!this.state.success){
            return (
                <div className="container-fluid contact-container">
                    <div className="top-space">
                        <SEO 
                            title={this.state.loaded?this.state.seoData.contact.title:"Contact Us"}
                            desc={this.state.loaded?this.state.seoData.contact.desc:'Looking for best Boat Manufactures & Ship Chandler in India.SHM Group Manufacture,supply & service various types of boats in India.Click for more details.'}
                            page={"/contact"}
                        />
                        <form onSubmit={(event)=>this.sendContact(event)}>
                            <h1 className="display-4 text-center">Write to us</h1>
                            <div className="grey-text">
                            <MDBInput
                                label="Your name"
                                icon="user"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                name="name"
                                value={this.state.name}
                                onInput={this.handleInput}
                                required
                            />
                            <MDBInput
                                label="Your email"
                                icon="envelope"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                                name="email"
                                value={this.state.email}
                                onInput={this.handleInput}
                                required
                            />
                            <MDBInput
                                type="textarea"
                                rows="2"
                                label="Your message"
                                icon="pencil-alt"
                                name="message"
                                value={this.state.message}
                                onInput={this.handleInput}
                                required
                            />
                            </div>
                            <div className="text-center">
                            <MDBBtn color="contact-button" className="container-fluid" type="submit">
                                Send <MDBIcon far icon="paper-plane" className="ml-1" />
                            </MDBBtn>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }else{
            this.setState({
                success:false
            });
            alert("Message Sent")
            return <Redirect to="/" />;
        }
    }
}

export default Contact;