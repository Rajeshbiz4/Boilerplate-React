import React, { Component } from 'react'
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
        <div style={{ color : 'red'}}>
        <p>HOme sdfmn mUS</p>
     </div>
    )
  }
}

Home.propTypes = {}

Home.defaultProps = {}

export default withRouter(Home)
