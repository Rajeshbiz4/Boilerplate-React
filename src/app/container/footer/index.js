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
      <div class="homefooter  inner">
      <footer>
        <div class="wrapper">
          <div class="footer-main-outer">
          <ul class="footer-link">
            <li class="fot-res-menu"> <a href="/aboutus"> About Us </a> </li>
            <li> <a href="/contactus"> Contact Us </a> </li>
            <li> <a href="/privacy"> Privacy Policy </a> </li>
            <li> <a href="/terms"> Terms Of Service </a> </li>
          </ul>
          <div class="follow footer">
            <span>Follow us on:</span>
            <a rel="noopener" target="_blank" href="https://www.linkedin.com/company/net-pro-referral/" class="forli" aria-label="Linkedin"></a>
            <a rel="noopener" target="_blank" href="https://twitter.com/netproreferral" class="fortw" aria-label="Twiiter"></a>
            <a rel="noopener" target="_blank" href="https://www.facebook.com/netproreferral/" class="forfb" aria-label="Facebook"></a>
            <a rel="noopener" target="_blank" href="https://www.instagram.com/netproreferral/" class="forins" aria-label="Instagram"></a>
            <a rel="noopener" target="_blank" href="https://www.youtube.com/channel/UC9BPDcUBx9L1GViIIcaX-MA" class="foryt" aria-label="Youtube"></a>
            <a rel="noopener" target="_blank" href="https://plus.google.com/111595052459536536120/posts" class="forgp" aria-label="Google Plus"></a>
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
