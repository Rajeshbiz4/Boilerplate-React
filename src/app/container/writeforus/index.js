import React, { Component, Fragment } from 'react'
import 'react-dropdown/style.css'
import { withRouter } from "react-router-dom";

class WriteForUS extends Component {
  constructor(){
      super();
      this.state = {
        inputValue: 'yo',
      };      
  }


  render() {
    return (
      <h1>Coming soon</h1>
         
    )
  }
}

WriteForUS.propTypes = {}

WriteForUS.defaultProps = {}

export default withRouter(WriteForUS)
