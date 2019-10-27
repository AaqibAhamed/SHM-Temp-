import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../../Styles/Footer.scss";
import {MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon} from "mdbreact";

import Button from "./Button";
import DataProvider from "../Providers/DataProvider";

export default class Footer extends Component{
    constructor(props){
        super(props);
        this.state={
            address:[],
            navigate:[],
            socialButtons:[],
            Company:{},
            loading:true
        }
        this.getData();
    }

    getData = async ()=>{
        let {NavigationMenu, Company} = DataProvider;

        let address = [];
        let Navigate = [];
        let SocialButtons = [];

        Company = await Company;
        NavigationMenu[2].children = await NavigationMenu[2].children;

        Company.Address.forEach((line,i)=>{
            address.push(
                <p key={i} className="m-0">{line}</p>
            )
        })

        Company.Social.forEach((btn,i)=>{
            SocialButtons.push(
                <Button key={i} href={btn.href} className="footer-btn-1">
                    <MDBIcon fab icon={btn.icon} /> {btn.title}
                </Button>
            )
        })
        
        NavigationMenu.forEach((item,i)=>{
            if(item.link){
                Navigate.push(
                    <Link key={i} to={item.link}><Button className="footer-btn-1">
                        {item.title}
                    </Button></Link>
                )
            }else{
                Navigate.push(
                    <Button key={i} href={item.href?item.href:'#'} className="footer-btn-1">
                        {item.title}
                    </Button>
                )
            }
        })

        this.setState({
            address:address,
            navigate:Navigate,
            socialButtons:SocialButtons,
            Company:Company,
            loading:false
        })
    }

    render(){
        if(this.state.loading){
            return <div></div>;
        }
        return (
            <MDBFooter className="padding-11 main-footer">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow className="text-left">
                        <MDBCol>
                            <img src={DataProvider.Logo} className="img footer-logo" alt={this.state.Company.Name} />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol lg="4" md="6" sm="12" className="pt-5">
                            <h5 className="text-uppercase color-primary pb-2">Contact Us</h5>
                            <div className="clearfix text-dark">
                                <strong>{this.state.Company.Name}</strong><br/>
                                {this.state.Company.SubTitle} <br/>
                                {this.state.address}
                                {this.state.Company.Telephone?<p className="p-2 color-primary-dark m-0">
                                    <MDBIcon icon="phone" />
                                    <strong><a href={this.state.Company.Telephone.href} className="text-dark pl-2">{this.state.Company.Telephone.text}</a></strong>
                                </p>:''}
                                {this.state.Company.Email?<p className="p-2 color-primary-dark">
                                    <MDBIcon icon="envelope" />
                                    <strong><a href={this.state.Company.Email.href} className="text-dark pl-2">{this.state.Company.Email.text}</a></strong>
                                </p>:''}
                            </div>
                        </MDBCol>
                        <MDBCol lg="3" md="6" sm="12" className="pt-5">
                            <h5 className="text-uppercase color-primary pb-2">CORPORATE INFO</h5>
                            <Button href="#" className="footer-btn-1">
                                Privacy Policy
                            </Button>
                            <Button href="#" className="footer-btn-1">
                                Site Map
                            </Button>
                            <Button href="#" className="footer-btn-1">
                                T&CS
                            </Button>
                            <Button href="#" className="footer-btn-1">
                                Cookies Policy
                            </Button>
                            <Button href="#" className="footer-btn-1">
                                External Data Processor policy
                            </Button>
                            <Button href="#" className="footer-btn-1">
                                Modern Slavery Statment
                            </Button>
                        </MDBCol>
                        <MDBCol lg="5" md="12">
                            <MDBRow >
                                <MDBCol md="6" sm="12" className="pt-5">
                                    <h5 className="text-uppercase color-primary pb-2">Navigate to</h5>
                                    {this.state.navigate}
                                </MDBCol>
                                <MDBCol md="6" sm="12" className="pt-5">
                                    <h5 className="text-uppercase color-primary pb-2">Follow Us</h5>
                                    {this.state.socialButtons}
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="text-right color-primary pt-4">
                        <MDBCol>
                            <strong>&copy; {new Date().getFullYear()} - SHM Sri Lanka</strong>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBFooter>
        );
    }
}