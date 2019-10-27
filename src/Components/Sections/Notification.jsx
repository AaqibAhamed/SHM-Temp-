import React, { Component } from 'react';
import { MDBAlert } from 'mdbreact';
class Notification extends Component {
    getTitle(status){
        let msg;
        switch (status) {
            case "success":
                msg = "Greatings"
                break;
            case "danger":
                msg="Warning"
                break;
            default:
                return;
        }
        return <strong>{msg}!</strong>
    }
    render() { 
        let msg = new URLSearchParams(window.location.search).get('msg');
        let status = new URLSearchParams(window.location.search).get('status');
        if(msg){
            return (
                <MDBAlert className="mb-0" color={status} dismiss>
                    {this.getTitle(status)} {msg}
                </MDBAlert>
            );
        }
        return(
            <div></div>
        );
    }
}
 
export default Notification;