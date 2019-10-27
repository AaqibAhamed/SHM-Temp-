import React, {Component} from "react";
import "../../Styles/Button.scss";

export default class Button extends Component{
    render(){
        let classes = "custom-btn-default";
        if(this.props.className){
            classes+=(" "+this.props.className)
        }
        if(this.props.light){
            classes+=(" button-light")
        }
        if(this.props.borderLight){
            classes+=(" button-border-light")
        }
        if(this.props.bgPrimary){
            classes+=(" button-bg-primary")
        }
        if(this.props.bgPrimaryDark){
            classes+=(" button-bg-primary-dark")
        }
        let path = "#";
        if(this.props.href){
            path = this.props.href;
        }
        let styles = {};
        if(this.props.style){
            styles = this.props.style;
        }
        return (
            <button onClick={() => { window.location.href = path }} className={classes} style={styles}>
                {this.props.children}
            </button>
        );
    }
}