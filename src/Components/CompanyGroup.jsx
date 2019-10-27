import React, { Component } from 'react';
import SEO from './Sections/SEO';
import Banner from './Sections/Banner';
import {  MDBRow, MDBCol, MDBCardBody } from "mdbreact";
import '../Styles/Vars.scss';
var bannerImage = '/content/images/banner_stock-2.jpg';

const companies = [
    {
        name:"CRAFTWAY ENGINEERS LTD.",
        img : "/content/images/companies/craftway-engioneers.png",
        desc : "Craftway Engineers Ltd., a member of the SHM group of companies, is one of the pioneers for building FRP Boats indigenously in India. Creativity, Commitment, Innovation and above all correct Attitude are the fundamentals of Craftway's philosophy. We specialize in building boats that are tailor-made to the requirement of our customers, thereby adding a personalized touch to our products.",
    },
    {
        name:"HOMA ENGINEERING WORKS",
        img : "/content/images/companies/homa-engineers-works.png",
        desc : "One of the leading Ship Repair and Engineering organizations in Mumbai since 1950, Homa Engineering Works offers over three and half decades of expertise in repairing ships of all flags and classification societies, carrying out repairs in dry docks, wet basins and in stream. Our management and service cadres comprise of having qualified Master - Mariners, 1st Class Marine Engineers & Ex – Naval Officers with vast and diverse experience on regular merchant, offshore and M.O. D. Vessels.",
    },

]

var companiesDisplay = [];

export default class About extends Component{
    render(){
        window.scrollTo(0,0)
        companiesDisplay = [];

        companies.forEach((company,i)=>{
            companiesDisplay.push(
                <MDBCol key={i} lg="4" md="12" className="mb-lg-0 mb-4 p-3 fa-border border-light-1 m-1">
                    <img
                        src={company.img}
                        alt={company.name}
                    />
                    <MDBCardBody className="pb-0">
                        <h6 className="font-weight-bold my-3 mt-n3 blue-grey-text">{company.name}</h6>
                        <p className="text-justify">
                        {company.desc}
                        </p>
                    </MDBCardBody>
                </MDBCol>
            )
        })

        return (
            <div className="container-fluid">
                <SEO 
                    title="Our Group Of Companies" 
                    desc="Looking for best Boat Manufactures & Ship Chandler in India.SHM Group Manufacture,supply & service various types of boats in India.Click for more details."
                    page="/our-group-of-companies/"
                />
                <Banner title="About" subtitle="Our Group of Companies" image={bannerImage} />
                <MDBRow className="text-center p-5">
                    {companiesDisplay}
                </MDBRow>
            </div>
        );
    }
}