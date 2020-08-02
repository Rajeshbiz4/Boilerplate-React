import React, { Component } from 'react'
import 'react-dropdown/style.css'
import { withRouter } from "react-router-dom";


class FooterPage extends Component {
  constructor(){
      super();
      this.state = {
        inputValue: 'yo',
      };
      
  }

  

 

  render() {
    return (
         <footer className="App-footer">
            <p>© 2020 Net Pro Referral, Inc.</p>
         </footer>
    )
  }
}

FooterPage.propTypes = {}

FooterPage.defaultProps = {}

export default withRouter(FooterPage)
