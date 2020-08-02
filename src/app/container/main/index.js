import React, { Component } from 'react'
import Header from '../header'
import DashBoard from '../Dashboard'
import FooterPage from '../footer';
import Home from '../home';
import HowItWorks from '../howItworks';
import Blog from '../Blog';
import WriteForUS from '../writeforus';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
            </Switch>
         </Router>
         <FooterPage />
      </div>
    )
  }
}

Main.propTypes = {}

Main.defaultProps = {}

export default Main
