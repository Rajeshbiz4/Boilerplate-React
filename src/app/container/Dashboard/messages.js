import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Messages extends Component {

 componentDidMount(){
     console.log("componentDidMount Messages");
 }
 
  render() {
    return (
      <div>
       <div class="basic-info">
		<div class="dashboard-inner">
				<div class="container">
          <div class="top-heading-bar"><h3>
            <input title="Select All" type="checkbox" id="select_all" name="select_all" />
            <label style={{ cursor : 'pointer' }} for="select_all">
              <b>Select All</b></label></h3>
              <ul style={{ display : 'none' }} class="mail-ico">
                <li id="markRead" title="Mark as read" >
                  <a><img alt="NetProReferral" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/mail-box1.png" /></a></li>
                  <li id="markUnRead" title="Mark as unread" ><a>
                    <img alt="NetProReferral" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/mail-box.png" /></a></li>
                    <li id="delConv" title="Delete Conversation" ><a>
                      <img alt="NetProReferral" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/del.png" /></a></li></ul>
                      </div><div class="tb-content-block-outer"><div id="tableBody" class="tb-content-block">
                        <div style={{ cursor : 'pointer' }} id="div2661" class="tb-content-row row read-msg">
                          <div class="tb-content-cell  b-block-b"><div  class="input-table">
                            <input type="checkbox" id="2661" name="2661" />
                            <label for="2661"></label></div><div id="img2661" class="list-user-img-bluck active">
                              <img alt="NetProReferral" class="img-1-blk initial loading" src="https://dcywhuojnzfz0.cloudfront.net/assets/images/noprofileimage.png" data-was-processed="true" />
                              </div><p id="name2661">vijay vijay</p></div><div id="content2661" class="tb-content-cell  b-block-c">
                                <p id="newContent2661"><span id="subject2661"><b>test</b></span> - sdfadsfdf</p></div><div id="date2661" class="tb-content-cell  time-cell"><p id="newDate2661">03:03 pm Aug 15, 2020</p></div></div></div></div></div>		
			
		</div>
		
	</div>
      </div>
    );
  }
}

Messages.propTypes = {};

Messages.defaultProps = {};

export default Messages;
