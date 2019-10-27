import React, { Component } from "react";
import "../../Styles/Navigation.scss";
import { Link } from 'react-router-dom';
import DataProvider from '../Providers/DataProvider';

const menuClick = (e) => {
  document.getElementsByClassName('jsPopoutTarget')[0].classList.toggle("popout-is-active");
};

const onRouteChange = ()=>{
    document.getElementsByClassName('jsPopoutTarget')[0].classList.remove("popout-is-active");
}

/**
 * @param {[{
 *  "title":string,
 *  "link":string,
 *  "children":
 * }]} mymenu 
 * 
 * @returns JSX.Element
 */
const getMenu = (mymenu) => {
    let menudisplay = []
    mymenu.forEach((value,i) => {
        let children = null;
        if(value.children){
            children = getMenu(value.children)
        }
        if(!value.hidden){
            menudisplay.push(
                <li key={i} className={children!=null?"dropdown":""}>
                    {(!value.link)?<a href={value.href} className="" title={value.title}><span>{value.title}</span></a>:<Link to={value.link} onClick={onRouteChange}>{value.title}</Link>}
                    {children}
                </li>
            );
        }
    })
    return (
        <ul>
            {menudisplay}
        </ul>
    )
}

export default class Navigation extends Component {
    constructor(props){
        super(props);
        this.state={
            NavigationMenu:[],
            Company:{},
            loading:true
        }
        this.getData();
    }

    getData = async ()=>{
        let {NavigationMenu, Company} = DataProvider;

        NavigationMenu[2].children = await NavigationMenu[2].children;
        Company = await Company;

        this.setState({
            NavigationMenu:NavigationMenu,
            Company:Company,
            loading:false
        })
    }

    render() {
        

        let menuDisplay = getMenu(this.state.NavigationMenu);
        if(this.state.loading){
            return <div></div>;
        }
        return (
            <div className="header__navbar-group jsNavBar clearfix">

                <section className="row site-navbar theme-stena-blue">
                        <div className="navbar-element site-logo site-logo--text-home">
                        <Link to={this.state.NavigationMenu[0].link} className="pl-3 text-left color-light hover-color-light-1 font-weight-normal">
                            {/* <h1 className="h3">{this.state.Company.Name}</h1><h2 className="h5">{this.state.Company.SubTitle}</h2> */}
                            <img src={DataProvider.Logo} className="site-logo-img" alt={this.state.Company.Name} />
                        </Link>
                        </div>

                        <div className="navbar-element navbar-trigger navbar-trigger--hamburger jsPopoutTrigger" onClick={menuClick} data-popout-trigger="site-nav">
                            <div className="navbar-trigger__icon hamburger" title="Open / Close menu">
                                <span className="hamburger-1"></span>
                                <span className="hamburger-2"></span>
                                <span className="hamburger-3"></span>
                            </div>
                            <div className="navbar-trigger__text">Menu</div>
                        </div>


                        <div className="navbar-element primary-nav jsSexyScrollBar jsPopoutTarget" data-popout-container="site-nav">

                            <div className="primary-nav__close" onClick={menuClick} data-popout-trigger="site-nav">
                                <span className="icon icon-close">Close</span>
                            </div>
                            
                                {menuDisplay}
                            
                        </div>
                </section>

            </div>
        );
    }
}
