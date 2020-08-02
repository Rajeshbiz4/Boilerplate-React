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
        //  <div className='App-header'>
        <div class="header">
  {/* <a href="#default" class="logo">CompanyLogo</a> */}
  <div class="logo-block">
					<a title="Net Pro Referral" href="https://www.netproreferral.com/"><img alt="" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/logo.svg" class="initial loading" data-was-processed="true" /></a>
				</div>
  <div class="header-right">
    <a class="active" href="/">Home</a>
    <a href="/howitworks">How it Works</a>
    <a href="/blog">Blog</a>
    <a href="/writeforus">Write For Us</a> 
  </div>
  {/* <div class="join-us-block">
														<span>Get Referred by your mentors, peers and other experts</span>
						<a class="claim-pop effect-main effect-color-hover" href="javascript:void(0);">  Claim Your Profile</a>
						<a  class="userlink login-pop" href="javascript:void(0);"> Login</a>
																		</div> */}
</div>
        //  </div>
    )
  }
}

Header.propTypes = {}

Header.defaultProps = {}

export default withRouter(Header)
