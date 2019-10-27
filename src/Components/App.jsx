import React, { Component } from "react";
import Navigation from "./Sections/Navigation";
import Footer from "./Sections/Footer";
import Home from "./Home";
import About from "./About";
import OurTeam from "./OurTeam";
import CompanyGroup from "./CompanyGroup";
import Services from "./Services";
import Contact from "./Contact";
import Notification from "./Sections/Notification"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Notification />
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/our-team" component={OurTeam} />
            <Route path="/our-group-of-companies" component={CompanyGroup} />
            <Route exact path="/services" component={Services} />
            <Route path="/services/:serviceId" component={Services} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}
