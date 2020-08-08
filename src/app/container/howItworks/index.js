import React, { Component, Fragment } from 'react'
import 'react-dropdown/style.css'

class HowItWorks extends Component {

  constructor(){
      super();
      this.state = {
       forMembrs : true
      };      
  }


  render() {
    return (
      <Fragment>
      <div class="page-banner-section how-it-banner how-it-work-bar" style={{ marginTop : 50 }}>
      <div class="wrapper">
        <div class="banner-inner">
          <h1 class="banner-heading">How It Works</h1>
          <div class="heading-content-right">
            <a href="https://www.netproreferral.com/" class="active">Home</a>
            <span>&nbsp;&gt;&nbsp;</span>
            <a >How It Works</a>
          </div>
        </div>
        <div class="visitoe-member-tabbing">
          <ul>
            <li class="" id="memberTab" className={ this.state.forMembrs ? 'active' : ''} onClick={() =>this.setState({ forMembrs : true })}>
              <a  >For members</a>
              <div class="member-tab-txt">Registered Users</div>
              <div class="arw-btm"></div>
            </li>
            <li id="visitorTab" className={ this.state.forMembrs ? '' : 'active'} onClick={() =>this.setState({ forMembrs : false })}>
              <a  >For visitors</a>
              <div class="member-tab-txt">Guest Users</div>
              <div class="arw-btm"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>


    { this.state.forMembrs ? 
    <div class="ref-tabbing-content ">	
		<div class="ref-member-tabbing" style={{ display : 'block'}}>
			<div class="ref-member-tabbing-grid1 gutter-space">
				<div class="wrapper">
					<div class="ref-member-tabbing-cover">
						<div class="ref-left-grid">
							<h2 class="heading-all">Claim your profile</h2>
							<p class="ref-tab-text">Display your skills, experience, expertise and other details to become a member. You can request referrals from existing members or invite your colleagues, mentors or other experts to join the network and refer you.</p>
																<div class="calltoaction-reg">
										<a class="claim-pop effect-main effect-ad-hover"  >  Claim Your Profile</a>
									</div>
													</div>
						<div class="ref-right-grid">
							<figure>
								<img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid1.png" class="initial loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid1.png" data-was-processed="true" />
								<span title="How it works" class="videoPlay-btn playVid"><img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/video-play.png" class="initial loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/video-play.png" data-was-processed="true" /></span>
							</figure>
						</div>
					</div>
				</div> 
			</div>

			<div class="middle-line">
				<figure><img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" class="initial loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" data-was-processed="true" /></figure>
			</div>
			<section class="ref-member-tabbing-grid2">
					<div class="wrapper">
						<p class="ref-tab-text ref-tab-text-center">Connect with other professionals who have authority in your field and add them to your referral network. Our technology builds your referral network into search engines so that you will get better search engine results.</p>
						<figure>
							<img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid2.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid2.png" data-was-processed="true" />
						</figure>
					</div>
			</section>
			<div class="middle-line">
				<figure><img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" data-was-processed="true" /></figure>
			</div>
			<section class="ref-member-tabbing-grid3">
				<div class="wrapper">
				<p class="ref-tab-text ref-tab-text-center">It is meant to be a very closely knitted community of experts with thousands of experts getting to know each other and becoming more available to newer opportunities.</p>
								
					<div class="calltoaction-reg calltoaction-center">
						<a class="claim-pop effect-main effect-ad-hover"  >  Find new opportunities</a>
					</div>
									<figure>
						<img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid3.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid3.png" data-was-processed="true" />
					</figure>
				</div>
			</section>
			<div class="middle-line">
				<figure><img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" data-was-processed="true" /></figure>
			</div>
			<section class="grid4">
				<div class="wrapper">
					<div class="ref-left-grid-diff">
						<h2 class="heading-all">Explore your professional network</h2>
						<p class="ref-tab-text">Get to know more people and get more accessible to clients and referrals. Get connected with other professionals in your field and get referred based on your skills, expertise and experience. No fake or biased negative reviews are allowed.</p>
													<div class="calltoaction-reg">
								<a class="claim-pop effect-main effect-ad-hover"  >  get more clients and referrals</a>
							</div>
											</div>
					<div class="ref-right-grid-diff">
						<figure>
							<img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid4.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid4.png" data-was-processed="true" />
						</figure>
					</div>
				</div>
			</section>
			<div class="middle-line">
				<figure><img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" data-was-processed="true" /></figure>
			</div>
			<section class="grid5">
				<div class="wrapper">
					<div class="ref-left-grid-diff">
						<h2 class="heading-all">Standout through high search result ranking</h2>
						<p class="ref-tab-text">Our search result listings are according to your profile content and the strength of the profiles of the professionals that refer you. The quality and quantity of your references can be viewed by searchers.</p>
												
							<div class="calltoaction-reg">
								<a class="claim-pop effect-main effect-ad-hover"  >  be found more</a>
							</div>
											</div>
					<div class="ref-right-grid-diff">
						<figure>
							<img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid5.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid5.png" data-was-processed="true" />
						</figure>
					</div>
				</div>
			</section>
			<div class="middle-line">
				<figure><img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" data-was-processed="true" /></figure>
			</div>
			<section class="grid6">
				<div class="wrapper">
					<p class="ref-tab-text ref-tab-text-center">Then as you keep up with your good services you will continue to build your referral network.</p>
					<figure>
						<img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid6.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid6.png" data-was-processed="true" />
					</figure>
				</div>
			</section>
			<div class="middle-line">
				<figure><img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" data-was-processed="true" /></figure>
			</div>
			<section class="grid7">
				<div class="wrapper">
					<p class="ref-tab-text ref-tab-text-center">Great opportunities are just some referrals away!</p>
					<figure>
						<img alt="" class="bigLogo loaded" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/logo.svg" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/logo.svg" data-was-processed="true" />
					</figure>
									
						<div class="calltoaction-reg calltoaction-center">
							<a class="claim-pop effect-main effect-ad-hover"  >  Claim Your Profile</a>
						</div>
									</div>
			</section>
		</div> 
	<div class="visitor-tab-section" style={{ display : 'none' }} >
		<div class="ref-visitor-tabbing">
			<div class="visitor-grid1">
				<div class="wrapper">
					<h2 class="visitor-top-heading heading-all">The NetProReferral.com search process is <br /><span>simple, lucid</span> and <span>free</span>.</h2>
				</div>
			</div>
		</div>
		<div class="middle-line">
				<figure><img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" class="initial loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" data-was-processed="true" /></figure>
		</div>
		<div class="visitor-grid2">
			<div class="wrapper">
				<p class="ref-tab-text ref-tab-text-center">Experts from different professions are made available through a robust search engine just like Google.</p>
				<figure>
					<img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid-name2.png" class="initial loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid-name2.png" data-was-processed="true" />
				</figure>
			</div>
		</div>
		<div class="middle-line">
				<figure><img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" data-was-processed="true" /></figure>
		</div>
		<div class="visitor-grid3">
			<div class="wrapper">
				<p class="visitor-common-text">Users simply enter the <span>Category</span> of <span>Professional</span> they need and specify<br /> the location to instantly get a <span>ranked listing</span> of <span>expert professionals</span> <br />near them.</p>
				<figure>
					<img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid-name.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid-name.png" data-was-processed="true" />
				</figure>
			</div>
		</div>
		<div class="middle-line">
				<figure><img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" data-was-processed="true" /></figure>
		</div>
		<div class="visitor-grid4">
			<div class="wrapper">
				<p class="visitor-common-text">Get instant access to the huge pool of talent that is constantly<br /> growing and expanding here!</p>
				<figure>
					<img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid3.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid3.png" data-was-processed="true" />
				</figure>
			</div>
		</div>
		<div class="middle-line">
				<figure><img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" data-was-processed="true" /></figure>
		</div>
			<section class="visitor-grid5">
				<div class="wrapper">
					<div class="ref-left-grid-diff">
						<h2 class="heading-all">Best professional experts are ranked</h2>
						<p class="ref-tab-text">according to their profile content and on the strength of their referrals. You will be able to see the quality, the quantity and the profiles of the references too.  </p>
					</div>
					<div class="ref-right-grid-diff">
						<figure>
							<img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid5.png" />
						</figure>
					</div>
				</div>
			</section>
			<div class="middle-line">
				<figure><img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" /></figure>
			</div>
			<section class="visitor-grid-6">
					<div class="wrapper">
						<div class="ref-left-grid-diff">
							<h2 class="heading-all">No more worries of fake and biased reviews.</h2>
							<p class="ref-tab-text">You only get the genuine talent based on the advice of other professionals who are experts in their fields not random reviewers.</p>
						</div>
						<div class="ref-right-grid-diff">
							<figure>
								<img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/visitor-grid4.png" />
							</figure>
						</div>
					</div>
			</section>
			<div class="middle-line middlie-line-diff">
				<figure><img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" /></figure>
			</div>
			<section class="visitor-grid-7">
				<div class="wrapper">
					<p class="visitor-common-text">With NetProReferral you get the newest, the fastest and the most effective way of exploring the professional talent pool!</p>
					<figure>
						<img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/visitor-grid7.png" />
					</figure>
				</div>
			</section>
			<section class="visitor-grid-8">
				<div class="wrapper">
					<p class="visitor-common-text">And the expert services you need stays just a search away with <br /><span>Net Pro Referral Inc.</span>!</p>
					<figure>
						<img alt="" class="bigLogo" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/logo.svg" />
					</figure>
         
				</div>
			</section>
		</div>
	</div>



:


  <div class="visitor-tab-section" style={{ display : 'block'}}>
		<div class="ref-visitor-tabbing">
			<div class="visitor-grid1">
				<div class="wrapper">
					<h2 class="visitor-top-heading heading-all">The NetProReferral.com search process is <br /><span>simple, lucid</span> and <span>free</span>.</h2>
				</div>
			</div>
		</div>
		<div class="middle-line">
				<figure><img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" class="initial loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" data-was-processed="true" /></figure>
		</div>
		<div class="visitor-grid2">
			<div class="wrapper">
				<p class="ref-tab-text ref-tab-text-center">Experts from different professions are made available through a robust search engine just like Google.</p>
				<figure>
					<img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid-name2.png" class="initial loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid-name2.png" data-was-processed="true" />
				</figure>
			</div>
		</div>
		<div class="middle-line">
				<figure><img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" class="initial loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" data-was-processed="true" /></figure>
		</div>
		<div class="visitor-grid3">
			<div class="wrapper">
				<p class="visitor-common-text">Users simply enter the <span>Category</span> of <span>Professional</span> they need and specify<br /> the location to instantly get a <span>ranked listing</span> of <span>expert professionals</span> <br />near them.</p>
				<figure>
					<img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid-name.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid-name.png" data-was-processed="true" />
				</figure>
			</div>
		</div>
		<div class="middle-line">
				<figure><img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" data-was-processed="true" /></figure>
		</div>
		<div class="visitor-grid4">
			<div class="wrapper">
				<p class="visitor-common-text">Get instant access to the huge pool of talent that is constantly<br /> growing and expanding here!</p>
				<figure>
					<img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid3.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid3.png" data-was-processed="true" />
				</figure>
			</div>
		</div>
		<div class="middle-line">
				<figure><img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" data-was-processed="true" /></figure>
		</div>
			<section class="visitor-grid5">
				<div class="wrapper">
					<div class="ref-left-grid-diff">
						<h2 class="heading-all">Best professional experts are ranked</h2>
						<p class="ref-tab-text">according to their profile content and on the strength of their referrals. You will be able to see the quality, the quantity and the profiles of the references too.  </p>
					</div>
					<div class="ref-right-grid-diff">
						<figure>
							<img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid5.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/grid5.png" data-was-processed="true" />
						</figure>
					</div>
				</div>
			</section>
			<div class="middle-line">
				<figure><img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" data-was-processed="true" /></figure>
			</div>
			<section class="visitor-grid-6">
					<div class="wrapper">
						<div class="ref-left-grid-diff">
							<h2 class="heading-all">No more worries of fake and biased reviews.</h2>
							<p class="ref-tab-text">You only get the genuine talent based on the advice of other professionals who are experts in their fields not random reviewers.</p>
						</div>
						<div class="ref-right-grid-diff">
							<figure>
								<img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/visitor-grid4.png" class="loaded" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/visitor-grid4.png" data-was-processed="true" />
							</figure>
						</div>
					</div>
			</section>
			<div class="middle-line middlie-line-diff">
				<figure><img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/center-line.png" /></figure>
			</div>
			<section class="visitor-grid-7">
				<div class="wrapper">
					<p class="visitor-common-text">With NetProReferral you get the newest, the fastest and the most effective way of exploring the professional talent pool!</p>
					<figure>
						<img alt="" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/visitor-grid7.png" />
					</figure>
				</div>
			</section>
			<section class="visitor-grid-8">
				<div class="wrapper">
					<p class="visitor-common-text">And the expert services you need stays just a search away with <br /><span>Net Pro Referral Inc.</span>!</p>
					<figure>
						<img alt="" class="bigLogo" data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/logo.svg" />
					</figure>
				</div>
			</section>
		</div> }


    </Fragment>
    )
  }
}

HowItWorks.propTypes = {}

HowItWorks.defaultProps = {}

export default HowItWorks;
