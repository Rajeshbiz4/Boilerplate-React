import React, { Component } from "react";
import TabView from '../../components/Tabs';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class EditProfile extends Component {

 componentDidMount(){
     console.log("componentDidMount EditProfile");
 }
 
  render() {
    return (
      <div>
        EditProfile
        <TabView data={[ {name : 'Contact information'}, {name : 'Education'}, {name : 'Skills and Exp'}, {name : 'More about you'}]} >ANC</TabView>
      </div>
    );
  }
}

EditProfile.propTypes = {};

EditProfile.defaultProps = {};

export default EditProfile;
