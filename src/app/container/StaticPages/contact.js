import React, { Component, Fragment } from 'react'
import 'react-dropdown/style.css'
import { withRouter } from "react-router-dom";


class ContactUS extends Component {
  constructor(){
      super();
      this.state = {
        inputValue: 'yo',
      };
  }

  render() {
    return (
        <Fragment>
            <div class="page-banner-section contact-us-banner" style={{ marginTop : 50 }}>
	<div class="wrapper">
		<div class="banner-inner">
			<h1 class="banner-heading">Contact Us</h1>
			<div class="heading-content-right">
				<a href="/" class="active">Home</a>
				<span>&nbsp;&gt;&nbsp;</span>
				<a>Contact Us</a>
			</div>
		</div>
	</div>
</div>

<section class="my-profile contact-us-custom">
	<div class="wrapper">
		<div class="edit-profile-content-block">
			<div class="contact-us neclass">
			<div class="left-contact forsuccerrMsg innerpagestemplate">
						</div>
			</div>
			
			
			<div class="contact-us">
				<div class="right-contact-block">
					<h2>Net Pro Referral</h2>
					<ul>
						<li>
							10061 Pasadena Ave. Suite A <br />Cupertino, CA 95014
							<div class="img-icon-contact"> <img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/loc-contact.png" class="initial loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/loc-contact.png" data-was-processed="true" /></div>
						</li>
						<li>
							Email: <a style={{ color : 'rgb(0, 175, 235)'}} href="mailto:contact@netproreferral.com">contact@netproreferral.com</a>
							<div class="img-icon-contact"> <img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/email-contact.png" class="initial loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/email-contact.png" data-was-processed="true" /></div>
						</li>
					</ul>
				</div>
				<div class="left-contact">
					<form >
					<div class="field-strem">
						<div class="half">
							<div class="contact-heading">Name<span style={{ color : 'red'}} >*</span></div>
							<div class="profile-input-block ">
								<input type="text" class="name-icon-sel" aria-label="Enter your name" placeholder="Enter your name" name="name" id="name" value="" />
							</div>
						</div>
						<div class="half">
							<div class="contact-heading">Email<span style={{ color : 'red'}}>*</span></div>
							<div class="profile-input-block ">
								<input type="text" class="email-icon" aria-label="Enter your email address" placeholder="Enter your email address" name="email" id="email-cu" value="" />					
							</div>
						</div>
					</div>
					<div class="field-strem">
						<div class="full">
							<div class="contact-heading">Message<span style={{ color : 'red'}}>*</span></div>
							<div class="profile-input-block textarea">
								<textarea aria-label="How we can help you?" placeholder="How we can help you?" style={{ padding : '10px', resize : 'none'}} name="message" id="message" value=""></textarea>
							</div>
						</div>
					</div>
					<div class="field-strem captcha-contact">
						<div class="half">
							<div id="recaptchaContact"><div style={{ width : '304px', height : '78px' }} ><div><iframe title="recaptchaContact1" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdnPSoUAAAAACqzNrEuhYORmuH_mVCvtM2dm0H5&amp;co=aHR0cHM6Ly93d3cubmV0cHJvcmVmZXJyYWwuY29tOjQ0Mw..&amp;hl=en&amp;v=AFBwIe6h0oOL7MOVu88LHld-&amp;theme=light&amp;size=normal&amp;cb=xbpowdm6w8n" width="304" height="78" role="presentation" name="a-yqs4xovy3nat" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response-1" name="g-recaptcha-response" class="g-recaptcha-response" style={{ width : '250px', height : '40px', border : 'solid 1px rgb(193, 193, 193)', margin : '10px 20px', padding : '0px', resize : 'none', display : 'none'}} ></textarea></div></div>
							<input type="hidden" class="recatcha_check_contact" name="recatcha_check_contact" value="" />
						</div>
						<div class="half">
							<div class="btn-block">
								<button style={{ float : 'right' }} class="btn-main-link pre active effect-main effect-color-hover">Submit Now</button>
							</div>
						</div>
					</div>
					</form>
				</div>
			</div>
		</div>
					<div class="abt-adv vertical-cont-ad">
				<div class="abt-img-top">
					<img alt="NetProReferral" data-src="assets/images/ab-user.png" class="initial loaded" src="https://www.netproreferral.com/assets/images/ab-user.png" data-was-processed="true" />
				</div>
				<div class="abt-img-btm">
					<p>GET MORE <br /> JOBS AND REFERRALS</p>
					
					<a class="claim-pop effect-main effect-ad-hover">Claim Your Profile</a>
				</div>
			</div>
			</div>


	


</section>
 </Fragment>
      
    )
  }
}

ContactUS.propTypes = {}

ContactUS.defaultProps = {}

export default withRouter(ContactUS)
