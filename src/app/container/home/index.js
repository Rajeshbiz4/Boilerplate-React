import React, { Component, Fragment } from 'react'
import 'react-dropdown/style.css'
import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor(){
      super();
      this.state = {
        inputValue: 'yo',
      };      
  }


  render() {
    return (
        <Fragment >

   <div data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/banner2.jpg" class="slider-bg lazy initial" data-was-processed="true" style={{ height : '620px;', backgroundImage : 'url(&quot;https://dcywhuojnzfz0.cloudfront.net/assets/images/banner2.jpg&quot;)'}} >
		<div class="slider-block-main">
			<ul class="bxslider">
				<li class="main-banner-img" style={{ backgroundImage : 'url(https://dcywhuojnzfz0.cloudfront.net/assets/images/banner2.jpg)'}} ></li>
			</ul>
		</div>
		<section class="form-block home-form-block ">
			<div class="wrapper">
				<div class="form-block1">
										<div class="search-block1 animated fadeInLeft">
						<div class="search-form">
							<form action="https://www.netproreferral.com/professionals" method="post" id="search_frm" class="search_frm" name="search_frm" novalidate="novalidate">
								<div class="input-block-search">
									<input id="cat" name="cat" type="text" autocomplete="off" title="What type of professional you need?" placeholder="What type of professional you need?" class="ui-autocomplete-input" />
								</div>
								<div class="input-block-search-loc">
									<input type="text" title="Where?" placeholder="Where?" autocomplete="off" name="city" id="city" class="loc pac-target-input" />
									<img alt="Location" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/loc.png" class="loc-img initial loading" data-was-processed="true" />
									<input type="hidden" name="userLoc" id="userLoc" />
								</div>
								<button class="search-btn effect-main effect-color-hover">
									Search
								</button>
							</form>
						</div>
					</div>
									</div>				
			</div>
		</section>
	</div>
 
        {/* <div className="" id="variant-c">
             <div className="netpro-directory">
                  <div className="adv-dir-head">Be Found on our map</div>
                  <div className="calltoaction-reg calltoaction-center bfoundbtn">
                      <a className="claim-pop effect-main effect-ad-hover" href="javascript:void(0);">Claim Your Profile</a>
                      </div>
                      </div>
                      <div onclick="searchTerm();" className="variantc-map">
                          <img alt="" src="https://www.netproreferral.com/assets/images/variant-c.jpg" className="initial loading" data-was-processed="true" />
                          </div>
                          </div> */}
     </Fragment>
    )
  }
}

Home.propTypes = {}

Home.defaultProps = {}

export default withRouter(Home)
