import React, { Component, Fragment } from 'react'
import 'react-dropdown/style.css'
import { withRouter } from "react-router-dom";
import Modal from 'react-modal';


class Header extends Component {
  constructor(){
      super();
      this.state = {
        inputValue: 'yo',
        showLogin : false,
        showForgot : false,
        showSignup : false
      };
  }

  showLoginPopup = () => {
    this.setState({
      showLogin : true,
      showForgot : false,
      showSignup : false
    })
  }

  showForgotPopup = () => {
    this.setState({
      showLogin : false,
      showForgot : true,
      showSignup : false
    })
  }
  
  showSignupPopup = () => {
    this.setState({
      showLogin : false,
      showForgot : false,
      showSignup : true
    })
  }
  
  render() {
    return (
      <Fragment>
      <header class="fixheader">
      <div class="wrapper ">
        <div class="relative">
          <a title="How Net Pro Referral Works" href="https://www.netproreferral.com/how-it-works#video" class="howit-banner effect-main ">how it works</a>
          <div class="logo-block">
            <a title="Net Pro Referral" href="https://www.netproreferral.com/"><img alt="" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/logo.svg" class="initial loading" data-was-processed="true" /></a>
          </div>
                    <a class="l1-login claim-pop" >Claim <span>Your</span> Profile</a>
                            
          <div class="navi-container">
            <div id="menu">
              <img alt="Menu" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/menu.png" />
              </div>
              <ul class="navigation js" id="nav">
                <li class="res-menu">
                  <a class="login-pop" >Login</a>
                </li>
                <li class="res-menu">
                  <a class="register-pop" >Register</a>
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
                <a href="/contacus">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="join-us-block">
                              <span>Get Referred by your mentors, peers and other experts</span>
              <a class="claim-pop effect-main effect-color-hover" href="javascript:void(0);">  Claim Your Profile</a>
              <a  class="userlink login-pop" onClick={() =>this.setState({ showLogin : true})}> Login</a>
                                      </div>
          <div onclick="return hideDivTab();" class="arrow-up-link">
            <a href="javascript:void(0);"></a>
          </div>
        </div>
      </div>
    </header>
    <Modal
          isOpen={this.state.showLogin}
          onAfterOpen={() => {}}
          onRequestClose={() => {}}
          contentLabel="Example Modal"
        >
          <div class='pop-outer'>
  <div class="pop-main">
		<div class="pop-inner">
			<div class="pop-main-inner">
				<div class="login-block login-outer-main">
					<div class="login-icon">
						<div class="icon-img">
							<div class="icon-inner"></div>
						</div>
					</div>
					<img onClick={() => this.setState({ showLogin : false })} class="cross-pop initial loaded" alt="Close" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/cross-pop1.png" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/cross-pop1.png" data-was-processed="true" />
					<form action="https://www.netproreferral.com/login" method="post" id="login_form" name="login_form" role="form" novalidate="novalidate">
						<div class="login-form">
							<h2><span class="join-first">Login</span><span class="join-second">Login With</span></h2>
							<p style={{ textAlign : 'center', marginBottom : '7px !important' }} class="with-text">with</p>
							<div class="social-login-icons">
							<a title="Sign In with Facebook" href="javascript:void(0);" class="slogin logfb" onclick="return slogin('Facebook');"></a>&nbsp;
							<a title="Sign In with Linkedin" href="javascript:void(0);" class="slogin loglink" onclick="return slogin('LinkedIn');"></a>&nbsp;
							<a title="Sign In with Twitter" href="javascript:void(0);" class="slogin logtw" onclick="return slogin('Twitter');"></a>
							</div>
							<p style={{ textAlign : 'center', marginBottom : '7px !important' }} >or</p>
							<div class="outermsg outerdiv" style={{ display : 'done' }}>							
								<span class="msg-span" id="response-login-msg"></span>
								<i class="fa fa-close closeClass"></i>
							</div>
							<div class="outermsg outerdiv1" style={{ display : 'done' }}>							
								<span class="msg-span1" id="response-login-msg1"></span>
								<i class="fa fa-close closeClass1"></i>
							</div>
																													<div class="full-block">
								<div class="input-block login-input email-input-div-bg">
									<input type="email" class="email-icon" aria-label="Email" placeholder="Email" name="username" id="username" value="" />
								</div>
							</div>
							<div class="full-block">
								<div class="input-block login-input pw-input-div-bg">
									<input type="password" class="key-icon" aria-label="Password" placeholder="Password" value="" name="password" />
								</div>
							</div>
							<input type="hidden" id="segment1" name="segment1" value="" />
							<input type="hidden" id="segment2" name="segment2" value="" />
							<input type="hidden" id="segment3" name="segment3" value="" />
							<input type="hidden" id="segment4" name="segment4" value="" />
							<div class="full-block">
								<div class="input-block">
									<div class="check-block">
										<div class="radio-block">
											<input type="hidden" name="rememberme" id="rememberme" value="" />
											<input type="checkbox" value="" name="rememberme1" id="rememberme1" class="radio-cir" />
											<label for="rememberme1">Remember me</label>
										</div>
									</div>
								</div>
							</div>
							<div class="full-block">
								<div class="input-block">
									<div class="login-lock"><button type="submit" class="login-btn input-effect" value="Login">Login</button></div>
								</div>
							</div>
						</div>
						<div class="forgot-links">
						<a class="forgot-password-link" onClick={() => this.showForgotPopup()}>Forgot password?</a>
						<a class="register-link" onClick={() => this.showSignupPopup()}>Claim a new profile</a>
					</div>
					</form>
				</div>
			</div>
		</div>
	</div>
  </div>
  </Modal>

  <Modal
          isOpen={this.state.showForgot}
          onAfterOpen={() => {}}
          onRequestClose={() => {}}
          contentLabel="Example Modal"
        >

          <div class='pop-outer'>
           <div class="pop-main">
		<div class="pop-inner">
   <div class="pop-main-inner">
				<div class="login-block login-outer-main">
					<div class="login-icon">
						<div class="icon-img">
							<div class="icon-inner"></div>
						</div>
					</div>
					<img alt="Close" onClick={() => this.setState({ showForgot : false })} class="cross-pop initial loaded" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/cross-pop1.png" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/cross-pop1.png" data-was-processed="true" />
					<form action="https://www.netproreferral.com/forgot-password" method="post" id="forget-form" name="forget-form" role="form" novalidate="novalidate">
						<div class="login-form">
							<h2>Forgot Password</h2>
														<div class="outermsg outerdiv">
								<span class="msg-span" id="response-login-msg-fp"></span>
								<i class="fa fa-close closeClass"></i>
							</div>
							<div class="outermsg outerdiv1">							
								<span class="msg-span1" id="response-login-msg1-fp"></span>
								<i class="fa fa-close closeClass1"></i>
							</div>
																													<div class="full-block">
								<div class="input-block login-inp">
									<input type="email" class="email-icon" aria-label="Enter email address" placeholder="Enter email address" name="email" id="email-fp" value="" />
								</div>
							</div>
							<div class="full-block">
								<div class="input-block">
									<div class="login-lock"><button type="submit" class="login-btn input-effect" name="forget-btn" id="forget-btn" value="Reset Password">Reset Password</button></div>
								</div>
							</div>
						</div>
						<div class="forgot-links">
							<a class="login-link" onClick={() => this.showLoginPopup()}>Login</a>
							<a class="register-link" onClick={() => this.showSignupPopup()}>Claim a new profile</a>
						</div>
					</form>
				</div>
			</div>
      </div>
      </div>
      </div>
  </Modal>

  <Modal
          isOpen={this.state.showSignup}
          onAfterOpen={() => {}}
          onRequestClose={() => {}}
          contentLabel="Example Modal"
        >
           <div class='pop-outer'>
  <div class="pop-main">
		<div class="pop-inner">
			<div class="pop-main-inner">
			<div class="login-block login-outer-main">
						<div class="login-icon">
							<div class="icon-img">
								<div class="icon-inner sign-up"></div>
							</div>
						</div>
				<img class="cross-pop initial loaded" onClick={() => this.setState({ showSignup : false })} alt="Close" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/cross-pop1.png" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/cross-pop1.png" data-was-processed="true" />
				<form action="https://www.netproreferral.com/register" method="post" id="signup-form" name="signup-form" role="form" novalidate="novalidate">
					<input type="hidden" id="segmentReg2" name="segmentReg2" value="" />
					<input type="hidden" id="segmentReg1" name="segmentReg1" value="professionals" />
					<div class="login-form reg-error-outer register-div">
						<h2><span class="join-first"><span class="join-reg-pop">Join</span> Here</span><span class="join-second"><span class="join-reg-pop">Join</span> With</span></h2>
						<p style={{ textAlign : 'center' }} class="with-text">with</p>
						<div class="social-login-icons">
						<a title="Sign Up with Facebook" href="javascript:void(0);" class="slogin logfb" onclick="return slogin('Facebook');"></a>&nbsp;
						<a title="Sign Up with Linkedin" href="javascript:void(0);" class="slogin loglink" onclick="return slogin('LinkedIn');"></a>&nbsp;
						<a title="Sign Up with Twitter" href="javascript:void(0);" class="slogin logtw" onclick="return slogin('Twitter');"></a>
						</div>
						<p style={{ textAlign : 'center' }}>or</p>
						<div class="outermsg outerdiv" style={{ display : 'none' }}>							
							<span class="msg-span" id="response-login-msg-reg"></span>
							<i class="fa fa-close closeClass"></i>
						</div>
						<div class="outermsg outerdiv1" style={{ display : 'none' }}>							
							<span class="msg-span1" id="response-login-msg-reg1"></span>
							<i class="fa fa-close closeClass1"></i>
						</div>
						<div id="register-message" style={{ display : 'none' }}></div>
						<div class="full-block">
							<div class="input-block input-block fn-input-div-bg">
								<input type="text" aria-label="First Name" placeholder="First Name" name="us_first_name" id="us_first_name" />
							</div>
						</div>
						<div class="full-block">
							<div class="input-block input-block fn-input-div-bg">
								<input type="text" aria-label="Last Name" placeholder="Last Name" name="us_last_name" id="us_last_name" />
							</div>
						</div>
						<div class="full-block">
							<div for="user_cat" class="input-block selt-aro">
								<input id="user_cat_name" class="select-block profession_name ui-autocomplete-input" name="user_cat_name" type="text" aria-label="Select Your Profession" placeholder="Select Your Profession" autocomplete="off" />
							</div>
						</div>
						<div class="full-block">
							<div class="input-block email-input-div-bg">
								<input type="email" class="email-icon register-email" aria-label="Email Address" placeholder="Email Address" name="email" id="email" value="" />
							</div>
						</div>
						<div class="full-block">
							<div class="input-block pw-input-div-bg">
								<input type="password" class="key-icon" aria-label="Password" placeholder="Password" value="" name="password" id="password" />
							</div>
						</div>
						<div class="full-block">
							<div class="input-block pw-input-div-bg">
								<input type="password" class="key-icon" aria-label="Confirm Password" placeholder="Confirm Password" value="" name="cpassword" id="cpassword" />
							</div>
						</div>
						<div class="full-block">
							<div class="input-block forcheckbox">
								<div class="check-block">
									<div class="radio-block">
										<input type="checkbox" value="" name="terms1" id="terms" /><label id="term-error" for="terms">Please agree to the <a rel="noopener" target="_blank" href="https://www.netproreferral.com/terms">Terms Of Service</a></label>
									</div>
								</div>
							</div>
						</div>
						<input style={{ opacity : 0, marginTop : '-9px'}} type="checkbox" value="" name="terms" id="terms_hidden" />
						
						<div id="recaptchaReg">
							<div class="g-recaptcha" data-sitekey="6LdnPSoUAAAAACqzNrEuhYORmuH_mVCvtM2dm0H5"><div style={{ width : '304px', height : '78px'}} ><div><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdnPSoUAAAAACqzNrEuhYORmuH_mVCvtM2dm0H5&amp;co=aHR0cHM6Ly93d3cubmV0cHJvcmVmZXJyYWwuY29tOjQ0Mw..&amp;hl=en&amp;v=AFBwIe6h0oOL7MOVu88LHld-&amp;size=normal&amp;cb=we2yod2swyvo" width="304" height="78" role="presentation" name="a-skq00fqebjwt" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style={{ width : '250px', height : '40px', border: '1px solid rgb(193, 193, 193)', margin : '10px 25px', padding : '0px', resize: 'none', display : 'none' }} ></textarea></div><iframe style={{ display : 'none'}}></iframe></div>
							<input type="hidden" name="recatcha_check" value="0" />
						</div>
						<div class="full-block signUp-register">
							<div class="input-block">
								<div class="login-lock"><button type="submit" class="login-btn input-effect" value="Signup" name="signUp" id="signUp">Signup</button></div>
							</div>
						</div>
					</div>
					<div class="forgot-links already-acc">
						<a class="login-link" onClick={() => this.showLoginPopup()}> Already have an account? </a>
					</div>
				</form>
			</div>
		</div>
		</div>
	</div>
  </div>
  </Modal>
    </Fragment>
    )
  }
}

Header.propTypes = {}

Header.defaultProps = {}

export default withRouter(Header)
