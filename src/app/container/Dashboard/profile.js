import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Profile extends Component {

 componentDidMount(){
     console.log("componentDidMount Profile");
 }
 
  render() {
    return (
      <div>
        <div class="basic-info">
                          <div class="basic-info-heading">
                            <h1>Basic information</h1>
                          </div>
                          <p>--</p>
                        </div>
                        <div class="basic-info">
                          <div class="basic-info-heading">
                            <h1>Additional information</h1>
                          </div>
                          <div class="info-detail">
                            <div class="info-detail-left">
                              <div class="detail-head">Address</div>
                              <div class="detail-content">
                                <div class="edit-icon">
                                  <a href="https://www.netproreferral.com/user/editprofile/2">
                                    <img
                                      alt=""
                                      data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/edit.png"
                                      class="initial loaded"
                                      src="https://dcywhuojnzfz0.cloudfront.net/assets/images/edit.png"
                                      data-was-processed="true"
                                    />
                                  </a>
                                </div>
                                <p>-</p>
                              </div>
                            </div>
                            <div class="info-detail-left">
                              <div class="detail-head">Phone Number</div>
                              <div class="detail-content">
                                <div class="edit-icon">
                                  <a href="https://www.netproreferral.com/user/editprofile/3">
                                    <img
                                      alt=""
                                      data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/edit.png"
                                      class="initial loaded"
                                      src="https://dcywhuojnzfz0.cloudfront.net/assets/images/edit.png"
                                      data-was-processed="true"
                                    />
                                  </a>
                                </div>
                                <p>-</p>
                              </div>
                            </div>
                          </div>
                          <div class="info-detail">
                            <div class="info-detail-left">
                              <div class="detail-head">Occupation</div>
                              <div class="detail-content">
                                <div class="edit-icon">
                                  <a href="https://www.netproreferral.com/user/editprofile/4">
                                    <img
                                      alt=""
                                      data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/edit.png"
                                      class="initial loaded"
                                      src="https://dcywhuojnzfz0.cloudfront.net/assets/images/edit.png"
                                      data-was-processed="true"
                                    />
                                  </a>
                                </div>
                                <p>software engineer</p>
                              </div>
                            </div>
                            <div class="info-detail-left">
                              <div class="detail-head">Email Address</div>
                              <div class="detail-content">
                                <p>
                                  <a title="admin123@yopmail.com">
                                    admin123@yopmail.com
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="basic-info" style={{ marginTop: "20px" }}>
                          <div class="basic-info-heading advertiseYou-block">
                            <h1>Advertise yourself on</h1>
                            <p class="advertise-social">
                              <a
                                title="Facebook"
                                class="fb-adver"
                                alt=""
                              >
                                {""}
                              </a>
                              &nbsp;
                              <a
                                title="Linkedin"
                                class="lin-adver"
                                
                                alt=""
                              >
                                {""}
                              </a>
                              &nbsp;
                              <a
                                title="Twitter"
                                class="twi-adver"
                               
                                alt=""
                              >
                                {""}
                              </a>
                              &nbsp;
                              <a
                                title="Google"
                                class="goggle-adver"
                               
                                alt=""
                              >
                                {""}
                              </a>
                              &nbsp;&nbsp;
                            </p>
                            <a title="Get Referred" class="moreRefMp">
                              {""}
                            </a>
                          </div>

                          <p>
                            <span
                              style={{
                                fontSize: "13px",
                                wordWrap: "break-word",
                                wordBreak: "break-all",
                              }}
                            >
                              Public profile URL:
                              https://www.netproreferral.com/m/abc-abc-edefea300ddc978aac095741f5667534
                            </span>
                          </p>
                        </div>
      </div>
    );
  }
}

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
