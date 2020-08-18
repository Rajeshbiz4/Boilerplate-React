import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Password extends Component {

    componentDidMount(){
        console.log("componentDidMount Password");
    }

  render() {
    return (
      <div>
       <form class="add-studio-frm edit-profile" name="change-form" id="change-form" method="post" action="" novalidate="novalidate">
	<div class="basic-info">
		<div class="field-strem">
			<div class="full">
				<div class="stream-heading">Old Password<span style={{ color : 'red' }}>*</span></div>
				<div class="profile-input-block ">
					<input type="Password" class="block-input .login-inp" name="old_password" id="old_password" title="Enter your old password" placeholder="Enter your old password" />
				</div>
			</div>
		</div>
		<div class="field-strem">
			<div class="full">
				<div class="stream-heading">New Password<span style={{ color : 'red' }}>*</span></div>
				<div class="profile-input-block ">
					<input type="Password" class="block-input .login-inp" id="new_password" name="new_password" title="Enter your new password" placeholder="Enter your new password" />
				</div>
			</div>
		</div>
		<div class="field-strem">
			<div class="full">
				<div class="stream-heading">Confirm Password<span style={{ color : 'red' }}>*</span></div>
				<div class="profile-input-block ">
					<input type="Password" class="block-input .login-inp" name="re_password" id="re_password" title="Confirm your new password" placeholder="Confirm your new password" />
				</div>
			</div>
		</div>
		<div class="btn-block">
			<button style={{ fontSize : '12px' }} class="btn-main-link active effect-main effect-color-hover" id="save">UPDATE PASSWORD</button>			
		</div>			
	</div>
	</form>
      </div>
    );
  }
}

Password.propTypes = {};

Password.defaultProps = {};

export default Password;
