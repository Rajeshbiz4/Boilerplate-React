import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchUserAction } from "./logic";
// import User from "../user";
import Profile from './profile';
import EditProfile from './editprofile';
import Password from './changePassword';
import GetReferred from './getReferred';
import ReferralsList from './referrllist';
import Messages from './messages';

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const styleObj = {
  padding: "10px",
  margin: "10px",
};

class DashBoard extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      profile : true,
      editprofile: false,
      cpassword : false,
      getreferred : false,
      referrallist : false,
      messages : false
    };
  }

  onProfileClick = () => {
    this.setState({
      profile : true,
      editprofile: false,
      cpassword : false,
      getreferred : false,
      referrallist : false,
      messages : false
    })
  }

  onEditprofileClick = () => {
   this.setState({
    profile : false,
    editprofile: true,
    cpassword : false,
    getreferred : false,
    referrallist : false,
    messages : false
   })
  }

  onCpasswordClick = () => {
    this.setState({
      profile : false,
      editprofile: false,
      cpassword : true,
      getreferred : false,
      referrallist : false,
      messages : false
     })
  }

  onGetReferredClick = () => {
    this.setState({
      profile : false,
      editprofile: false,
      cpassword : false,
      getreferred : true,
      referrallist : false,
      messages : false
     })
  }
  
  onReferrallistClick = () => {
    this.setState({
      profile : false,
      editprofile: false,
      cpassword : false,
      getreferred : false,
      referrallist : true,
      messages : false
     })
  }

  onMessagesClick = () => {
    this.setState({
      profile : false,
      editprofile: false,
      cpassword : false,
      getreferred : false,
      referrallist : false,
      messages : true
     })
  }


  render() {
    return (
      <Fragment>
      <div style={styleObj}>
        <section class="my-profile">
          <div class="wrapper">
            <div class="heading-block">
              <div class="heading-content-left">
                <h1>
                  My Profile{" "}
                  <span>View your professional information here</span>
                </h1>
              </div>
              <div class="fb-invite-pop">
                <a
                  class="effect-main effect-fb-hover"
                  id="FacebookInviteFriends"
                >
                  Invite your friends
                </a>
              </div>
              <div class="heading-content-right">
                <a href="https://www.netproreferral.com/" class="active">
                  Home{" "}
                </a>
                <span>&nbsp;&gt;&nbsp;</span>
                <a>My Profile</a>
              </div>
            </div>

            <link
              rel="stylesheet"
              type="text/css"
              href="https://dcywhuojnzfz0.cloudfront.net/assets/css/sweetalert.css"
              media="all"
              onload="if(media!=='all')media='all'"
            />
            <div class="account-page-container new-account-container">
              <div class="wrapper">
                <div class="acc-main-block-out innerpagestemplate">
                  <div>
                    <div class="ref_message"></div>
                  </div>
                  <div class="acc-main-block">
                    <link
                      href="https://www.netproreferral.com/assets/jcrop/jquery.Jcrop.min.css"
                      rel="stylesheet"
                      type="text/css"
                      media="all"
                      onload="if(media!=='all')media='all'"
                    />
                    <script
                      defer=""
                      type="text/javascript"
                      src="https://www.netproreferral.com/assets/jcrop/jquery.Jcrop.min.js"
                    ></script>
                    <div class="edit-profile-content-block">
                      <div class="sidebar-profile">
                        <div class="profile-pic-block">
                          <div class="profile-pic1">
                            <img
                              alt="NetProReferral"
                              src="https://dcywhuojnzfz0.cloudfront.net/assets/images/noprofileimage.jpg"
                              class="initial loading"
                              data-was-processed="true"
                            />
                            <div
                              title="Add Picture"
                              id="show_pic_popup"
                              style={{ cursor: "pointer" }}
                              class="edit-overlay-img"
                            ></div>
                          </div>
                          <h2>Dear Member</h2>
                          <h6>abc abc</h6>
                          <div class="inviteRef"></div>
                        </div>
                        <ul>
                          <li className={this.state.profile ? 'activeli' : '' } id="go-to-msg1">
                            <a className={this.state.profile ? 'active' : '' } onClick={this.onProfileClick} >
                              My Profile{" "}
                            </a>
                          </li>
                          <li className={this.state.editprofile ? 'activeli' : '' } >
                            <a className={this.state.editprofile ? 'active' : '' } onClick={this.onEditprofileClick}>
                              Edit Profile{" "}
                            </a>
                          </li>
                          <li className={this.state.cpassword ? 'activeli' : '' }>
                            <a className={this.state.cpassword ? 'active' : '' } onClick={this.onCpasswordClick}>
                              {" "}
                              Change Password
                            </a>
                          </li>
                          <li className={this.state.getreferred ? 'activeli' : '' } id="get-ref-trip" class="">
                            <a className={this.state.getreferred ? 'active' : '' }  onClick={this.onGetReferredClick}>
                              {" "}
                              Get Referred
                            </a>
                            <div class="notify-after-rev">
                              <span id="go-to-msg">
                                You have 0 referral(s). Would you like to ask
                                for referrals?
                                <br />
                              </span>
                              <img
                                alt="NetProReferral"
                                src="https://dcywhuojnzfz0.cloudfront.net/assets/images/line2.png"
                                class="initial loading"
                                data-was-processed="true"
                              />
                            </div>
                          </li>
                          <li className={this.state.referrallist ? 'activeli' : '' }>
                            <a className={this.state.referrallist ? 'active' : '' } onClick={this.onReferrallistClick}>
                              Referrals List
                            </a>
                          </li>
                          <li className={this.state.messages ? 'activeli' : '' }>
                            <a className={this.state.messages ? 'active' : '' } onClick={this.onMessagesClick}>
                              Messages
                            </a>
                          </li>
                        </ul>
                        <a id="dlt-prof">Deactivate your account</a>
                      </div>
                      <div class="popup" id="popup" style={{ display: "none" }}>
                        <div class="popup-inner">
                          <div class="popup-tb">
                            <div class="popup-cell">
                              <div class="crop-popup-main">
                                <div
                                  class="crop-popup"
                                  style={{ maxHeight: "634px" }}
                                >
                                  <form
                                    name="profile_pic_remove"
                                    id="profile_pic_remove"
                                    method="post"
                                    action="https://www.netproreferral.com/user/removePicture"
                                  >
                                    <input
                                      type="hidden"
                                      name="picAction"
                                      value="removePic"
                                    />
                                    <input
                                      type="hidden"
                                      name="cur_url"
                                      value="https://www.netproreferral.com/user/myprofile/loginsuccess"
                                    />
                                  </form>
                                  <form
                                    name="profile_pic_form"
                                    id="profile_pic_form"
                                    enctype="multipart/formdata"
                                    action="https://www.netproreferral.com/user/updatePicture"
                                    method="post"
                                  >
                                    <h3 class="prof-pic-chnge head1">
                                      {" "}
                                      Change picture
                                    </h3>
                                    <div class="browse-btn">
                                      <input
                                        type="file"
                                        id="profilePic"
                                        name="profilePic"
                                        value=""
                                        class="browse-btn-a file-browse"
                                      />
                                      <a
                                        id="profilePic-btn"
                                        class="browse-btn-a"
                                      >
                                        {" "}
                                        Browse image{" "}
                                      </a>
                                      <input
                                        type="hidden"
                                        name="image_key"
                                        id="image_key"
                                        value="0"
                                      />
                                      <input
                                        type="hidden"
                                        name="image_path"
                                        id="image_path"
                                        value="0"
                                      />
                                      <input
                                        type="hidden"
                                        name="image_ext"
                                        id="image_ext"
                                        value="0"
                                      />
                                      <input
                                        type="hidden"
                                        name="image_name"
                                        id="image_name"
                                        value=""
                                      />
                                      <input
                                        type="hidden"
                                        name="cur_url"
                                        value="https://www.netproreferral.com/user/myprofile/loginsuccess"
                                      />
                                    </div>
                                    <div
                                      style={{ display: "none" }}
                                      class="img-loader progress-bar-pop img-loader"
                                    >
                                      <div class="progress-bar-gray">
                                        <div class="progress-bar-move"></div>
                                      </div>
                                    </div>
                                    <div
                                      id="profile-picture-crop-panel"
                                      class="uploaded-img"
                                    ></div>
                                    <div
                                      id="cnfrm-img-remove"
                                      style={{ display: "none" }}
                                    >
                                      <h3 class="prof-pic-chnge head2">
                                        {" "}
                                        Remove picture
                                      </h3>
                                      <div class="del-btn cnfrm-rem">
                                        <a
                                          class="browse-btn-a effect-main effect-color-hover"
                                          id="remUPImage"
                                        >
                                          {" "}
                                          Confirm{" "}
                                        </a>
                                      </div>
                                      <div class="del-btn cncl-rem">
                                        <a
                                          class="browse-btn-a effect-main effect-color-hover"
                                          id="cancelDel"
                                        >
                                          {" "}
                                          Cancel{" "}
                                        </a>
                                      </div>
                                    </div>
                                    <div
                                      style={{ color: "red", fontSize: "13px" }}
                                      id="img-msg"
                                    ></div>
                                  </form>
                                </div>
                                <a class="cross imge">
                                  <img
                                    alt="Close"
                                    src="https://dcywhuojnzfz0.cloudfront.net/assets/images/multiply.png"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="more_referral_popup_auth"
                        id="more_referral_popup_auth"
                        style={{ display: "none" }}
                      >
                        <div class="content stud_pop_main content-vert">
                          <div class="pop_cross">
                            <a class="cross">
                              <img
                                alt="Close"
                                src="https://dcywhuojnzfz0.cloudfront.net/assets/images/multiply.png"
                              />
                            </a>
                          </div>
                          <div class="stud_pop_head">
                            <span>Account Activation Required</span>
                          </div>
                          <p class="validateTips"></p>
                          <div class="basic-info">
                            <label>
                              Account activation is required. Please check your
                              email for account activation link or click{" "}
                              <a
                                style={{ cursor: "pointer", color: "#00AFEB" }}
                                href="https://www.netproreferral.com/home/resendActivationLinkP/MTYzNTUyMCZhZG1pbjEyM0B5b3BtYWlsLmNvbQ=="
                              >
                                here
                              </a>{" "}
                              to resend activation link to{" "}
                              <b>admin123@yopmail.com</b> or edit your email
                              address and confirm.
                            </label>
                            <div class="tag-input-block">
                              <div>
                                <div class="block-input">
                                  <input
                                    type="text"
                                    name="inactive_user_email"
                                    id="inactive_user_email"
                                    placeholder="Enter Email Address"
                                    value="admin123@yopmail.com"
                                  />
                                  <input
                                    type="hidden"
                                    name="inactive_user_id"
                                    id="inactive_user_id"
                                    value="1635520"
                                  />
                                  <p
                                    id="prof-err-pop-inactive"
                                    style={{
                                      fontSize: "12px",
                                      color: "rgb(255, 0, 0)",
                                      marginBottom: "-24px",
                                      display: "none",
                                    }}
                                  ></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="pop_up_rigt_div">
                            <button
                              class="btn-main-link active effect-main effect-color-hover"
                              id="resendActCode"
                            >
                              CONFIRM
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="content-profile-block">
                      { this.state.profile ? <Profile /> : null }
                      { this.state.editprofile ? <EditProfile /> : null }
                      { this.state.cpassword ?<Password />: null }
                      { this.state.getreferred ?<GetReferred />: null }
                      { this.state.referrallist ?<ReferralsList />: null }
                      { this.state.messages ? <Messages />: null }
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </Fragment>
    );
  }
}

DashBoard.propTypes = {
  geneAction: PropTypes.func,
  gene: PropTypes.object.isRequired,
};

DashBoard.defaultProps = {};

const mapStateToProps = (state) => ({
  gene: state.gene,
});

export default withRouter(
  connect(mapStateToProps, { fetchUserAction })(DashBoard)
);
