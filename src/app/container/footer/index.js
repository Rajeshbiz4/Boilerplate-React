import React, { Component } from 'react'
import 'react-dropdown/style.css'
import { withRouter } from "react-router-dom";


 class FooterPage extends Component {
  constructor(){
      super();
      this.state = {
        inputValue: 'yo',
      };
  }

  render() {
    return (
      <div  className="homefooter  inner">
      <footer>
        <div  className="wrapper">
          <div  className="footer-main-outer">
          <ul  className="footer-link">
            <li  className="fot-res-menu"> <a href="/aboutus"> About Us </a> </li>
            <li> <a href="/contactus"> Contact Us </a> </li>
            <li> <a href="/privacy"> Privacy Policy </a> </li>
            <li> <a href="/terms"> Terms Of Service </a> </li>
          </ul>
          <div  className="follow footer">
            <span>Follow us on:</span>
    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/company/net-pro-referral/"  className="forli" aria-label="Linkedin">{""}</a>
            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/netproreferral"  className="fortw" aria-label="Twiiter">{""}</a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/netproreferral/"  className="forfb" aria-label="Facebook">{""}</a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/netproreferral/"  className="forins" aria-label="Instagram">{""}</a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UC9BPDcUBx9L1GViIIcaX-MA"  className="foryt" aria-label="Youtube">{""}</a>
            <a rel="noopener noreferrer" target="_blank" href="https://plus.google.com/111595052459536536120/posts"  className="forgp" aria-label="Google Plus">{""}</a>
          </div>
          <p>© 2020 Net Pro Referral, Inc.</p>
        </div>
        </div>
      </footer>
      </div>
    )
  }
}

FooterPage.propTypes = {}

FooterPage.defaultProps = {}

export default withRouter(FooterPage)
