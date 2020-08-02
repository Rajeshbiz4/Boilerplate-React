import React, { Component } from 'react'
import 'react-dropdown/style.css'
import { withRouter } from "react-router-dom";

class HowItWorks extends Component {
  constructor(){
      super();
      this.state = {
        inputValue: 'yo',
      };      
  }


  render() {
    return (
         <div style={{ color : 'red'}}>
            <p>How it works</p>
         </div>
    )
  }
}

HowItWorks.propTypes = {}

HowItWorks.defaultProps = {}

export default withRouter(HowItWorks)
