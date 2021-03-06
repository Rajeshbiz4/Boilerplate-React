import React, { Component } from "react";
import Header from "../header";
import DashBoard from "../Dashboard";
import FooterPage from "../footer";
import Home from "../home";
import HowItWorks from "../howItworks";
import Blog from "../Blog";
import WriteForUS from "../writeforus";
import Terms from "../StaticPages/terms";
import Privacy from "../StaticPages/privacy";
import AboutUs from "../StaticPages/about";
import ContactUS from "../StaticPages/contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <DashBoard /> */}
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/howitworks">
              <HowItWorks />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/writeforus">
              <WriteForUS />
            </Route>
            <Route path="/terms">
              <Terms />
            </Route>
            <Route path="/privacy">
              <Privacy />
            </Route>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/contactus">
              <ContactUS />
            </Route>
            <Route path="/dashboard">
              <DashBoard />
            </Route>
          </Switch>
        </Router>
        <FooterPage />
      </div>
    );
  }
}

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
