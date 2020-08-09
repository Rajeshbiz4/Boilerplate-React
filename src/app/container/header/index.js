import React, { Component, Fragment } from 'react';
import 'react-dropdown/style.css';
import { withRouter } from "react-router-dom";
import { forgotAction, forgotReset } from './logic';
import { connect } from 'react-redux';
import Modal from 'react-modal';

 class Header extends Component {
  constructor(props){
      super(props);
      this.state = {
        showLogin : false,
        showForgot : false,
		showSignup : false,
		fogotEmail : 'abc@gamil.com'
      };
  }

  componentDidMount () {
	// document.body.style.overflow = "hidden"
  }

  componentWillReceiveProps (nextProps) {
   console.log("HEader",nextProps.forgotData);
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

  onChange = e => {
	  this.setState({
		  [e.target.name] : e.target.value
	  })
  }

  onForgotSubmit = () => {
	  this.props.forgotAction({ 'email' : this.state.fogotEmail })
  }

  onForgotClose = () => {
	  this.props.forgotReset();
  }
  
  render() {
	  console.log("this.props.forgotData.data", this.props.forgotData.data);
    return (
      <Fragment>
      <header  className="fixheader">
      <div  className="wrapper ">
        <div  className="relative">
          <a title="How Net Pro Referral Works" href="https://www.netproreferral.com/how-it-works#video"  className="howit-banner effect-main ">how it works</a>
          <div  className="logo-block">
            <a title="Net Pro Referral" href="https://www.netproreferral.com/"><img alt="" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/logo.svg"  className="initial loading" data-was-processed="true" /></a>
          </div>
                    <a  className="l1-login claim-pop" >Claim <span>Your</span> Profile</a>
                            
          <div  className="navi-container">
            <div id="menu">
              <img alt="Menu" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/menu.png" />
              </div>
              <ul  className="navigation js" id="nav">
                <li  className="res-menu">
                  <a  className="login-pop" >Login</a>
                </li>
                <li  className="res-menu">
                  <a  className="register-pop" >Register</a>
                </li>
                                        <li  className="active">
                  <a href="/">Home</a>
                </li>
                <li  className="res-menu">
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
                  <li  className="res-menu">
                <a href="/contacus">Contact Us</a>
              </li>
            </ul>
          </div>
          <div  className="join-us-block">
                              <span>Get Referred by your mentors, peers and other experts</span>
              <a  className="claim-pop effect-main effect-color-hover"  >  Claim Your Profile</a>
              <a   className="userlink login-pop" onClick={() =>this.setState({ showLogin : true})}> Login</a>
                                      </div>
          <div className="arrow-up-link">
	<a>{""}</a>
          </div>
        </div>
      </div>
    </header>
    <Modal
          isOpen={this.state.showLogin}
          onAfterOpen={() => {}}
          onRequestClose={() => {}}
		  contentLabel="Example Modal"
		  ariaHideApp={false}
        >
          <div className='pop-outer'>
  <div  className="pop-main">
		<div  className="pop-inner">
			<div  className="pop-main-inner">
				<div  className="login-block login-outer-main">
					<div  className="login-icon">
						<div  className="icon-img">
							<div  className="icon-inner"></div>
						</div>
					</div>
					<img onClick={() => this.setState({ showLogin : false })}  className="cross-pop initial loaded" alt="Close" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/cross-pop1.png" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/cross-pop1.png" data-was-processed="true" />
					<form>
						<div  className="login-form">
							<h2><span  className="join-first">Login</span><span  className="join-second">Login With</span></h2>
							<p style={{ textAlign : 'center', marginBottom : '7px !important' }}  className="with-text">with</p>
							<div  className="social-login-icons">
	<a title="Sign In with Facebook"    className="slogin logfb" >{""}</a>&nbsp;
							<a title="Sign In with Linkedin"    className="slogin loglink" >{""}</a>&nbsp;
							<a title="Sign In with Twitter"    className="slogin logtw" >{""}</a>
							</div>
							<p style={{ textAlign : 'center', marginBottom : '7px !important' }} >or</p>
							<div  className="outermsg outerdiv" style={{ display : 'done' }}>							
								<span  className="msg-span" id="response-login-msg"></span>
								<i  className="fa fa-close close className"></i>
							</div>
							<div  className="outermsg outerdiv1" style={{ display : 'done' }}>							
								<span  className="msg-span1" id="response-login-msg1"></span>
								<i  className="fa fa-close close className1"></i>
							</div>
																													<div  className="full-block">
								<div  className="input-block login-input email-input-div-bg">
									<input type="email"  className="email-icon" aria-label="Email" placeholder="Email" name="username" id="username"  />
								</div>
							</div>
							<div  className="full-block">
								<div  className="input-block login-input pw-input-div-bg">
									<input type="password"  className="key-icon" aria-label="Password" placeholder="Password"  name="password" />
								</div>
							</div>
							<input type="hidden" id="segment1" name="segment1"  />
							<input type="hidden" id="segment2" name="segment2"  />
							<input type="hidden" id="segment3" name="segment3" />
							<input type="hidden" id="segment4" name="segment4" />
							<div  className="full-block">
								<div  className="input-block">
									<div  className="check-block">
										<div  className="radio-block">
											<input type="hidden" name="rememberme" id="rememberme"  />
											<input type="checkbox"  name="rememberme1" id="rememberme1"  className="radio-cir" />
											<label for="rememberme1">Remember me</label>
										</div>
									</div>
								</div>
							</div>
							<div  className="full-block">
								<div  className="input-block">
									<div  className="login-lock"><button type="submit"  className="login-btn input-effect" value="Login">Login</button></div>
								</div>
							</div>
						</div>
						<div  className="forgot-links">
						<a  className="forgot-password-link" onClick={() => this.showForgotPopup()}>Forgot password?</a>
						<a  className="register-link" onClick={() => this.showSignupPopup()}>Claim a new profile</a>
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
		  ariaHideApp={false}
        >

          <div  className='pop-outer'>
           <div  className="pop-main">
		<div  className="pop-inner">
   <div  className="pop-main-inner">
				<div  className="login-block login-outer-main">
					<div  className="login-icon">
						<div  className="icon-img">
							<div  className="icon-inner"></div>
						</div>
					</div>
					<img alt="Close" onClick={() => {this.setState({ showForgot : false }, () => this.onForgotClose)}}  className="cross-pop initial loaded" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/cross-pop1.png" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/cross-pop1.png" data-was-processed="true" />
					{/* <form> */}
						{ this.props.forgotData.flag && this.props.forgotData.data.status === 'FAIL' ? <div class="alert-error">
						<span class="closebtn" onClick={this.onForgotClose}>&times;</span> 
						  {this.props.forgotData.data.message}
						</div> : null}

						{ this.props.forgotData.flag && this.props.forgotData.data.status === 'SUCCESS' ? <div class="alert-sucess">
						<span class="closebtn" onClick={this.onForgotClose}>&times;</span> 
						  {this.props.forgotData.data.message}
						</div> : null}
						
						<div  className="login-form">
							<h2>Forgot Password</h2>
															<div  className="outermsg outerdiv">
								<span  className="msg-span" id="response-login-msg-fp"></span>
								<i  className="fa fa-close close className"></i>
							</div>
							<div  className="outermsg outerdiv1">							
								<span  className="msg-span1" id="response-login-msg1-fp"></span>
								<i  className="fa fa-close close className1"></i>
							</div>
								<div  className="full-block">
								<div  className="input-block login-inp">
									<input type="email"  className="email-icon" aria-label="Enter email address" placeholder="Enter email address" name="fogotEmail" id="email-fp" value={this.state.fogotEmail} onChange={this.onChange}/>
								</div>
							</div>
							<div  className="full-block">
								<div  className="input-block">
									<div  className="login-lock"><button  className="login-btn input-effect" name="forget-btn" id="forget-btn" value="Reset Password" onClick={this.onForgotSubmit} >Reset Password</button></div>
								</div>
							</div>
						</div>
						<div    className="forgot-links">
							<a    className="login-link" onClick={() => this.showLoginPopup()}>Login</a>
							<a    className="register-link" onClick={() => this.showSignupPopup()}>Claim a new profile</a>
						</div>
					{/* </form> */}
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
		  ariaHideApp={false}
        >
           <div    className='pop-outer'>
  <div    className="pop-main">
		<div    className="pop-inner">
			<div    className="pop-main-inner">
			<div    className="login-block login-outer-main">
						<div    className="login-icon">
							<div    className="icon-img">
								<div    className="icon-inner sign-up"></div>
							</div>
						</div>
				<img    className="cross-pop initial loaded" onClick={() => this.setState({ showSignup : false })} alt="Close" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/cross-pop1.png" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/cross-pop1.png" data-was-processed="true" />
				<form >
					<input type="hidden" id="segmentReg2" name="segmentReg2" value="" />
					<input type="hidden" id="segmentReg1" name="segmentReg1" value="professionals" />
					<div    className="login-form reg-error-outer register-div">
						<h2><span    className="join-first"><span    className="join-reg-pop">Join</span> Here</span><span    className="join-second"><span    className="join-reg-pop">Join</span> With</span></h2>
						<p style={{ textAlign : 'center' }}    className="with-text">with</p>
						<div    className="social-login-icons">
	             <a title="Sign Up with Facebook"      className="slogin logfb" onclick="return slogin('Facebook');">{""}</a>&nbsp;
						<a title="Sign Up with Linkedin"      className="slogin loglink" onclick="return slogin('LinkedIn');">{""}</a>&nbsp;
						<a title="Sign Up with Twitter"      className="slogin logtw" onclick="return slogin('Twitter');">{""}</a>
						</div>
						<p style={{ textAlign : 'center' }}>or</p>
						<div    className="outermsg outerdiv" style={{ display : 'none' }}>							
							<span    className="msg-span" id="response-login-msg-reg"></span>
							<i    className="fa fa-close close  className"></i>
						</div>
						<div     className="outermsg outerdiv1" style={{ display : 'none' }}>							
							<span    className="msg-span1" id="response-login-msg-reg1"></span>
							<i    className="fa fa-close close className1"></i>
						</div>
						<div id="register-message" style={{ display : 'none' }}></div>
						<div   className="full-block">
							<div    className="input-block input-block fn-input-div-bg">
								<input type="text" aria-label="First Name" placeholder="First Name" name="us_first_name" id="us_first_name" />
							</div>
						</div>
						<div    className="full-block">
							<div    className="input-block input-block fn-input-div-bg">
								<input type="text" aria-label="Last Name" placeholder="Last Name" name="us_last_name" id="us_last_name" />
							</div>
						</div>
						<div    className="full-block">
							<div for="user_cat"    className="input-block selt-aro">
								<input id="user_cat_name"    className="select-block profession_name ui-autocomplete-input" name="user_cat_name" type="text" aria-label="Select Your Profession" placeholder="Select Your Profession" autocomplete="off" />
							</div>
						</div>
						<div    className="full-block">
							<div    className="input-block email-input-div-bg">
								<input type="email"    className="email-icon register-email" aria-label="Email Address" placeholder="Email Address" name="email" id="email" value="" />
							</div>
						</div>
						<div    className="full-block">
							<div    className="input-block pw-input-div-bg">
								<input type="password"  className="key-icon" aria-label="Password" placeholder="Password" value="" name="password" id="password" />
							</div>
						</div>
						<div  className="full-block">
							<div  className="input-block pw-input-div-bg">
								<input type="password"  className="key-icon" aria-label="Confirm Password" placeholder="Confirm Password" value="" name="cpassword" id="cpassword" />
							</div>
						</div>
						<div  className="full-block">
							<div  className="input-block forcheckbox">
								<div  className="check-block">
									<div  className="radio-block">
										<input type="checkbox" value="" name="terms1" id="terms" /><label id="term-error" for="terms">Please agree to the <a rel="noopener noreferrer" target="_blank" href="https://www.netproreferral.com/terms">Terms Of Service</a></label>
									</div>
								</div>
							</div>
						</div>
						<input style={{ opacity : 0, marginTop : '-9px'}} type="checkbox" value="" name="terms" id="terms_hidden" />
						
						<div id="recaptchaReg">
							<div  className="g-recaptcha" data-sitekey="6LdnPSoUAAAAACqzNrEuhYORmuH_mVCvtM2dm0H5"><div style={{ width : '304px', height : '78px'}} ><div><iframe id="iframe1" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdnPSoUAAAAACqzNrEuhYORmuH_mVCvtM2dm0H5&amp;co=aHR0cHM6Ly93d3cubmV0cHJvcmVmZXJyYWwuY29tOjQ0Mw..&amp;hl=en&amp;v=AFBwIe6h0oOL7MOVu88LHld-&amp;size=normal&amp;cb=we2yod2swyvo" width="304" height="78" role="presentation" name="a-skq00fqebjwt" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" title="myFrame1"></iframe></div>
							<textarea id="g-recaptcha-response" name="g-recaptcha-response"  className="g-recaptcha-response" style={{ width : '250px', height : '40px', border: '1px solid rgb(193, 193, 193)', margin : '10px 25px', padding : '0px', resize: 'none', display : 'none' }} ></textarea></div><iframe title="myFrame" id="sdfdfsd1" style={{ display : 'none'}}></iframe></div>
							<input type="hidden" name="recatcha_check" value="0" />
						</div>
						<div  className="full-block signUp-register">
							<div  className="input-block">
								<div  className="login-lock"><button type="submit"  className="login-btn input-effect" value="Signup" name="signUp" id="signUp">Signup</button></div>
							</div>
						</div>
					</div>
					<div  className="forgot-links already-acc">
						<a  className="login-link" onClick={() => this.showLoginPopup()}> Already have an account? </a>
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

const mapStateToProps = state => ({
	forgotData : state.forgot
})
  
  export default withRouter(connect(mapStateToProps, { forgotAction, forgotReset })(Header))

// export default withRouter(Header)
