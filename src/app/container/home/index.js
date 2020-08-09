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
          {/* <div   className="" id="variant-c">
             <div   className="netpro-directory">
                  <div   className="adv-dir-head">Be Found on our map</div>
                  <div   className="calltoaction-reg calltoaction-center bfoundbtn">
                      <a   className="claim-pop effect-main effect-ad-hover" href="javascript:void(0);">Claim Your Profile</a>
                      </div>
                      </div>
                      <div onclick="searchTerm();"   className="variantc-map">
                          <img alt="" src="https://www.netproreferral.com/assets/images/variant-c.jpg"   className="initial loading" data-was-processed="true" />
                          </div>
                          </div> */}

   <div data-src="https://dcywhuojnzfz0.cloudfront.net/assets/images/banner2.jpg"  className="slider-bg lazy initial" data-was-processed="true" style={{ position: '', height : '620px', backgroundImage : 'url(&quot;https://dcywhuojnzfz0.cloudfront.net/assets/images/banner2.jpg&quot;)'}} >
		<div  className="slider-block-main">
			<ul  className="bxslider">
				<li   className="main-banner-img" style={{ backgroundImage : 'url(https://dcywhuojnzfz0.cloudfront.net/assets/images/banner2.jpg)'}} ></li>
			</ul>
		</div>
		<section  className="form-block home-form-block ">
			<div  className="wrapper">
				<div  className="form-block1">
										<div  className="search-block1 animated fadeInLeft">
						<div  className="search-form">
							<form >
								<div  className="input-block-search">
									<input id="cat" name="cat" type="text"  title="What type of professional you need?" placeholder="What type of professional you need?"  className="ui-autocomplete-input" />
								</div>
								<div  className="input-block-search-loc">
									<input type="text" title="Where?" placeholder="Where?" name="city" id="city"  className="loc pac-target-input" />
									<img alt="Location" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/loc.png"  className="loc-img initial loading" data-was-processed="true" />
									<input type="hidden" name="userLoc" id="userLoc" />
								</div>
								<button  className="search-btn effect-main effect-color-hover">
									Search
								</button>
							</form>
						</div>
					</div>
									</div>				
			</div>
		</section>
	</div>       
     </Fragment>
    )
  }
}

Home.propTypes = {}

Home.defaultProps = {}

export default withRouter(Home)
