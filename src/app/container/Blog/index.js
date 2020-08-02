import React, { Component } from 'react'
import 'react-dropdown/style.css'
import { withRouter } from "react-router-dom";

class Blog extends Component {
  constructor(){
      super();
      this.state = {
        inputValue: 'yo',
      };      
  }


  render() {
    return (
         <div style={{ color : 'red'}}>
            <p>blog</p>
         </div>
    )
  }
}

Blog.propTypes = {}

Blog.defaultProps = {}

export default withRouter(Blog)
