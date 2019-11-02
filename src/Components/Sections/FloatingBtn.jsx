import React, { Component } from 'react'
import "materialize-css";
import { MDBIcon } from "mdbreact";
import "../../Styles/FloatBtn.scss";

export default class FloatingBtn extends Component {

    render() {
        console.log(this.props)
        return (
            <div className={"floatbtn-container floatbtn-"+this.props.float}>
                <a className="btn" href={this.props.href}>
                    <MDBIcon icon={this.props.icon} />
                </a>
            </div>
        )
    }
}
