import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class GetReferred extends Component {

 componentDidMount(){
     console.log("componentDidMount GetReferred");
 }
 
  render() {
    return (
      <div>
       <div class="basic-info">
				<div class="tag-heading ref-top-text"><p>Please enter name and email address of people who you want to invite to refer you.</p></div>
				<div class="get-ref-cover">
					<div class="tag-input-block">
						<div class="inv-forms">
							<form id="addEmailForm" name="addEmailForm" novalidate="novalidate">
								<div class="field-strem">
									<div class="half">
										<div class="profile-input-block">
											<input type="text" name="ref_name" id="ref_name" title="Name" placeholder="Name" />
										</div>
									</div>
									<div class="half">
										<div class="profile-input-block">
											<input type="text" id="ref_email" name="ref_email" title="Email" placeholder="Email" />
										</div>
									</div>
									<a title="Add" class="addRefUser btn-refuser" >
                    <img alt="NetProReferral" class="initial loading" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/plus-img.png" data-was-processed="true" /></a>
								</div>
							</form>
							<form id="sendInviteForm" name="sendInviteForm"></form>
						</div>
							
						<div>
							<input style={{ opacity : 0 }}  type="checkbox" name="new-content" id="new-content" /><label style={{ paddingTop : '10px', marginLeft : '-15px', float : 'left', fontSize : '12px' }}  class="del app-it" >Customize invitation message</label>
							<div class="profile-input-block bussineAdres"  id="content-div">
								<textarea title="Customize invitation message" style={{ height : '200px', fontSize : '13px', overflow : 'hidden', outline : 'none' }} class="email-edit-content" id="edit_email_value" name="edit_email_value" tabindex="1">Dear UserName

I am requesting that you refer me to online searchers on NetProReferral.com.

It is NetProReferral.com where you can connect with fellow professional experts, peers, influencers, and trendsetters to get referrals from them. Besides, you too can refer other experts whom you trust and value.

It is the only place on the web where you can build your professional image with utmost authenticity because it is fully based on genuine expert referrals. No more fear and hassle of fake and biased reviews!

If you are already there in the NetProReferral database then you know what I am talking about, right? You may just log in to your account and visit my profile and write me a referral to let me know that you are there. I will refer you back!

And in case you do not have any account yet, then you are missing out a sure shot opportunity of professional presence development online with NetProReferral.com.

Sign up right away to find me there, to refer me, to get referred and to know much more!</textarea>
								<span class="emailCntnt" style={{ float: 'left', display : 'none' ,color : 'red', fontSize : '12px' }} ></span>
							</div>
						</div>
						
						<div class="btn-block ref-inv-btn">
							<button class="btn-main-link active effect-main effect-color-hover" id="sendInvites"><span>Get Referred</span><img alt="NetProReferral" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/send.png" class="initial loading" data-was-processed="true" /></button>			
						</div>
					</div>
					
					<div class="invite-btns">

</div>
</div>
						<span title="Invite Yahoo Contacts" id="yContacts"><span class="gContacts-icon"><img alt="NetProReferral" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/yahoo-iconpop.png" class="initial loading" data-was-processed="true" /></span>Invite with Yahoo </span>
						<span title="Invite Outlook Contacts" id="msContacts"><span class="gContacts-icon"><img alt="NetProReferral" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/outlook.png" class="initial loading" data-was-processed="true" /></span>Invite with Outlook </span>
						<a class="invite-or-circle" >or</a>
					</div>
				</div>
    );
  }
}

GetReferred.propTypes = {};

GetReferred.defaultProps = {};

export default GetReferred;
