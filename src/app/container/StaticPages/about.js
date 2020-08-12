import React, { Component, Fragment } from "react";
import "react-dropdown/style.css";
import { withRouter } from "react-router-dom";

class AboutUs extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div class="page-banner-section " style={{ marginTop: 50 }}>
          <div class="wrapper">
            <div class="banner-inner">
              <h1 class="banner-heading">About Us</h1>
              <div class="heading-content-right">
                <a href="/" class="active">
                  Home
                </a>
                <span>&nbsp;&gt;&nbsp;</span>
                <a>About Us</a>
              </div>
            </div>
          </div>
        </div>

        <section class="my-profile">
          <div class="wrapper" style={{ textAlign: "initial" }}>
            <div class="edit-profile-content-block">
              <div class="about-inner-main ad-abt-main">
                <div class="abt-adv">
                  <div class="abt-img-top">
                    <img
                      alt="NetProReferral"
                      src="https://www.netproreferral.com/assets/images/ab-user.png"
                      class="initial loading"
                      data-was-processed="true"
                    />
                  </div>
                  <div class="abt-img-btm">
                    <p>
                      GET MORE <br /> JOBS AND REFERRALS
                    </p>

                    <a class="claim-pop effect-main effect-ad-hover">
                      Claim Your Profile
                    </a>
                  </div>
                </div>
                <p>
                  <span style={{ color: "#00ccff" }}>
                    <strong>Mission Statement</strong>
                  </span>
                </p>
                <p class="p1">
                  To be the on-line go-to site for those needing professional
                  services and those offering professional services,
                  we&nbsp;will offer high quality and integrity information and
                  service to our site members and visitors. We will create
                  achoice working environment where honesty, integrity, respect,
                  fairness, kindness, service and contribution are&nbsp;our
                  business principles.
                </p>
                <p>
                  &nbsp;
                  <span style={{ color: "#00ccff" }}>
                    <strong>Service Structure</strong>
                  </span>
                </p>
                <p>
                  <span>
                    We have created such a database and a search engine from
                    where you get connected with the expert professionals in
                    your locality within minutes!{" "}
                  </span>
                </p>
                <p>
                  <span style={{ fontWeight: 300 }}>
                    And get the real pros based on their referrals from all the
                    other experts around them. No fake or biased reviews. Only
                    experts referring experts. This makes our channel of
                    targeting the professional you need hundred percent
                    authentic and at the same time professional.{" "}
                  </span>
                </p>
                <p>
                  <span style={{ fontWeight: 300 }}>
                    Our member professionals open up their profiles with Net Pro
                    Referral and start inviting and referring other
                    professionals to refer them back. The pros get referred only
                    by experts who know the realities of the situations and know
                    their real worth in the field or profession. No scope for
                    anybody to taint the career with petty reviews out of
                    ignorance or other sort of personal biasedness. Only
                    referrals from other professional experts who know the job
                    and know the intricacies of the field.{" "}
                  </span>
                </p>
                <p>
                  <span style={{ fontWeight: 300 }}>
                    The professional rankings are done based on a quality score
                    which is a function of profile content of the members as
                    well as the profile strength of their referrals. This leaves
                    you with the opportunity of finding out only the best
                    professionals who are highly esteemed within their own field
                    of work.{" "}
                  </span>
                </p>
                <p>
                  <span style={{ fontWeight: 300 }}>
                    Whether you are a company seeking for your next superstar
                    employee or just an individual in need of help with some
                    task or job. From gardening and plumbing to dentistry or
                    accounting whatever may be you need help with. Have a single
                    search and get the best nearby experts by your side!
                  </span>
                </p>
                <p>
                  <span style={{ color: "#00ccff" }}>
                    <strong>Our Vision</strong>
                  </span>
                </p>
                <p>
                  <span style={{ fontWeight: 300 }}>
                    Our goal is to offer a high quality and integrity source of
                    information that would serve the public as means to identify
                    professional members referred by other professional members
                    based on qualifications such as education, experience and
                    expertise. We have created a choice working environment
                    where honesty, integrity, respect, fairness, kindness,
                    service and contribution are the guiding principle. &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ color: "#00ccff" }}>
                    <strong>The Net Pro Difference</strong>
                  </span>
                </p>
                <p>
                  <span style={{ fontWeight: 300 }}>
                    Finding just the expert you need for professional services
                    you need becomes easier than ever with Net Pro Referral.{" "}
                  </span>
                </p>
                <p>
                  <span style={{ fontWeight: 300 }}>
                    Just search for the type of professional you need and
                    specify your locality. Get all the pros in the area in one
                    single place ranked and listed in line with their referrals.{" "}
                  </span>
                </p>
                <p>
                  <span style={{ fontWeight: 300 }}>
                    No more worries regarding fake or biased reviews nor any
                    fear of being harassed by some unknown reviewer!{" "}
                  </span>
                </p>
                <p>
                  <span style={{ fontWeight: 300 }}>
                    You get real and get authentic with Net Pro Referral Inc.!
                  </span>
                </p>
                <p>
                  <span style={{ color: "#00ccff" }}>
                    <strong>Our Team</strong>
                  </span>
                </p>
                <p>
                  <b>Alireza Baktashian -</b>
                  <span style={{ fontWeight: 300 }}>
                    {" "}
                    Founder, CEO also leads the high performance Net Pro
                    Referral team of more than 60 contributors/contractors.{" "}
                  </span>
                </p>
                <p>
                  <b>Yatish Maharaj - </b>
                  <span style={{ fontWeight: 300 }}>
                    CFO - Accounting and Finance. Member of the board of
                    directors.
                  </span>
                </p>
                <p>
                  <b>Alina Baktashian - </b>
                  <span style={{ fontWeight: 300 }}>
                    Corporate Secretary - CEO at VestInAm, Inc. Member of the
                    board of directors.{" "}
                  </span>
                </p>
                <p>
                  <b>Doug Slain - </b>
                  <span style={{ fontWeight: 300 }}>
                    Legal Expert and Advisor. Partner, Private Placement
                    Advisors, LLC. Member of board of directors.
                  </span>
                </p>
                <p>
                  <b>Tom Litchfield - </b>
                  <span style={{ fontWeight: 300 }}>
                    Data Analyst. Partner, Private Placement Advisors, LLC
                  </span>
                </p>
                <p>
                  <span style={{ color: "#00ccff" }}>
                    <strong>Board of Directors</strong>
                  </span>
                </p>
                <p>
                  <b>
                    Alireza Baktashian (Chairman), Yatish Maharaj, Alina
                    Baktashian, Doug Slain
                  </b>
                </p>
                <p>
                  <b>Nima Mokhlesi - </b>
                  <span style={{ fontWeight: 300 }}>
                    Advisor to the Board of Directors (Technology). Senior
                    Principle Engineer at Sandisk Corp. Author of 140 patents.
                  </span>
                </p>
                <p>
                  <b>Majid Hosseini - </b>
                  <span style={{ fontWeight: 300 }}>
                    Advisor to the Board of Directors (Data Analysis). Senior
                    Data Scientist at Staple Innovation Lab.
                  </span>
                </p>
                <p>
                  <span style={{ color: "#00ccff" }}>
                    <strong>Founders Biography</strong>
                  </span>
                </p>
                <p>
                  Alireza Baktashian is a veteran Silicon Valley business
                  generalist with extensive&nbsp;and diverse&nbsp;technology and
                  non-technology business development and management experience.
                  This balanced mix of interest, skills and experience has
                  prepared Ali to lead larger and more advanced teams needed for
                  a sizable company.
                </p>
                <p>
                  Currently, Ali is leading the netproreferral.com effort with
                  over 60 global contributors. Netproreferral.com is envisioned
                  to be a prominent site for professional search and referral
                  through its patent pending internet technology. Ali is
                  currently building Net Pro Referral, Inc's
                  management&nbsp;team, board of directors and technical
                  advisors from several Silicon Valley contributors. He is
                  raising seed funds through crowdfunding and VC connections.
                </p>
                <p>
                  <span style={{ color: "#00ccff" }}>
                    <strong>Professional Experience</strong>
                  </span>
                </p>
                <p>
                  12 years of experience in development, management and
                  strategic leadership of several small business units
                  (VestInAm, Inc and A Plus Auto Service Center, Inc) including
                  a successful Comfort Keepers franchise operation currently
                  providing in-home care services in Silicon Valley and
                  Peninsula.
                </p>
                <p>
                  15 years of management, engineering and corporate quality and
                  reliability experience in five technology companies.
                </p>
                <p>
                  Also developing other networking and search on-line concepts.
                </p>
                <p>
                  Specialties: <br />
                  Administration
                  <br />
                  Equity Investment
                  <br />
                  Marketing and Advertising
                  <br />
                  Operations
                  <br />
                  Human Resources
                  <br />
                  Information Technology
                  <br />
                  Internet Engineering
                  <br />
                  E-commerce
                  <br />
                  Finance and Accounting
                  <br />
                  Quality and Reliability
                </p>{" "}
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

AboutUs.propTypes = {};

AboutUs.defaultProps = {};

export default withRouter(AboutUs);
