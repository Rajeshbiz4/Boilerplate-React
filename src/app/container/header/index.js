import React, { Component } from 'react'
import 'react-dropdown/style.css'
import { withRouter } from "react-router-dom";


class Header extends Component {
  constructor(){
      super();
      this.state = {
        inputValue: 'yo',
      };
      
  }

  
  
  render() {
    return (
      <header class="fixheader">
      <div class="wrapper ">
        <div class="relative">
          <a title="How Net Pro Referral Works" href="https://www.netproreferral.com/how-it-works#video" class="howit-banner effect-main ">how it works</a>
          <div class="logo-block">
            <a title="Net Pro Referral" href="https://www.netproreferral.com/"><img alt="" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/logo.svg" class="initial loading" data-was-processed="true" /></a>
          </div>
                    <a class="l1-login claim-pop" href="javascript:void(0);">Claim <span>Your</span> Profile</a>
                            
          <div class="navi-container">
            <div id="menu"><img alt="Menu" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/menu.png" /></div><ul class="navigation js" id="nav">
                            <li class="res-menu">
                  <a class="login-pop" href="javascript:void(0);">Login</a>
                </li>
                <li class="res-menu">
                  <a class="register-pop" href="javascript:void(0);">Register</a>
                </li>
                                        <li class="active">
                  <a href="/">Home</a>
                </li>
                          <li class="res-menu">
                <a href="/about">About Us</a>
              </li>
                            <li>
                  <a href="/howitworks">How it Works</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/writeforus">Write For Us</a>
                </li>
                          <li class="res-menu">
                <a href="https://www.netproreferral.com/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="join-us-block">
                              <span>Get Referred by your mentors, peers and other experts</span>
              <a class="claim-pop effect-main effect-color-hover" href="javascript:void(0);">  Claim Your Profile</a>
              <a  class="userlink login-pop" href="javascript:void(0);"> Login</a>
                                      </div>
          <div onclick="return hideDivTab();" class="arrow-up-link">
            <a href="javascript:void(0);"></a>
          </div>
        </div>
      </div>
    </header>
    )
  }
}

Header.propTypes = {}

Header.defaultProps = {}

export default withRouter(Header)
