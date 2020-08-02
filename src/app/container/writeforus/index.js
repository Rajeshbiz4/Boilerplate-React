import React, { Component } from 'react'
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
         <div style={{ color : 'red'}}>
            <p>WriteForUS</p>
         </div>
    )
  }
}

WriteForUS.propTypes = {}

WriteForUS.defaultProps = {}

export default withRouter(WriteForUS)
